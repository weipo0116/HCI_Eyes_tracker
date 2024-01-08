window.onload = async function () {
  var prevY = 0;
  var previousElement = null;
  var targetElementId = "switch_color"; //當Target id為此的時候會 changeElementStyle
  //start the webgazer tracker
  await webgazer
    .setRegression("ridge") /* currently must set regression and tracker */
    //.setTracker('clmtrackr')
    .setGazeListener(function (data, clock) {
      //   console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
      //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
      var scrollX = data.x + window.scrollX;
      var scrollY = data.y + window.scrollY;
      var gazeX = data.x;
      var gazeY = data.y;
      // 获取当前眼动点所在的 DOM 元素
      var elementAtGaze = document.elementFromPoint(gazeX, gazeY);

      // 检查是否存在元素
      if (elementAtGaze && elementAtGaze.id === targetElementId) {
        // 如果眼动到的元素不同于上一个元素，恢复上一个元素的样式，更改当前元素的样式
        if (elementAtGaze !== previousElement) {
          resetPreviousElementStyle();
          changeElementStyle(elementAtGaze);
          previousElement = elementAtGaze;
        }
      } else {
        // 如果没有眼动到元素，恢复上一个元素的样式
        resetPreviousElementStyle();
        previousElement = null;
      }

      displayCustomElement(data.x, data.y);

      // 在这里添加监听红点位置的代码
      checkHoverTargets(scrollX, scrollY);

      // 判断眼动y坐标与页面高度的关系
      if (data.y < 0) {
        // 如果眼动在页面的最上方，向上滚动5个单位
        window.scrollBy(0, -5);
      } else if (data.y > window.innerHeight) {
        // 如果眼动在页面的最下方，向下滚动5个单位
        window.scrollBy(0, 5);
      }
    })
    .saveDataAcrossSessions(true)
    .begin();

  webgazer
    .showVideoPreview(false) /* shows all video previews */
    .showPredictionPoints(
      true //默認紅點
    ) /* shows a square every 100 milliseconds where current prediction is */
    .applyKalmanFilter(
      true
    ); /* Kalman Filter defaults to on. Can be toggled by user. */

  //Set up the webgazer video feedback.
  var setup = function () {
    //Set up the main canvas. The main canvas is used to calibrate the webgazer.
    var canvas = document.getElementById("plotting_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
  };
  setup();

  // 重置上一个元素的样式
  function resetPreviousElementStyle() {
    if (previousElement) {
      previousElement.style.fontSize = "";
      previousElement.style.backgroundColor = "";
      previousElement.style.color = "";
      element.style.transform = "";
    }
  }

  // 更改当前元素的样式
  function changeElementStyle(element) {
    element.style.fontSize = "95%";
    element.style.backgroundColor = "pink";
    element.style.color = "red";
    element.style.transform = "scale(1.12)";
  }
};

// Set to true if you want to save the data even if you reload the page.
window.saveDataAcrossSessions = true;

window.onbeforeunload = function () {
  webgazer.end();
};

/**
 * Restart the calibration process by clearing the local storage and reseting the calibration point
 */
function Restart() {
  document.getElementById("Accuracy").innerHTML = "<a>Not yet Calibrated</a>";
  webgazer.clearData();
  ClearCalibration();
  PopUpInstruction();
}

function displayCustomElement(x, y) {
  // Get or create an element to represent the custom gaze point
  var eyeIcon = document.getElementById("eyeIcon");
  if (!eyeIcon) {
    eyeIcon = document.createElement("span");
    eyeIcon.id = "eyeIcon";
    eyeIcon.innerHTML = ""; // Use the eye emoji or replace it with your custom eye icon
    eyeIcon.style.fontSize = "24px";
    eyeIcon.style.position = "fixed";
    document.body.appendChild(eyeIcon);
  }

  // Position the eye icon at the gaze coordinates
  eyeIcon.style.left = x + "px";
  eyeIcon.style.top = y + "px";
}

// 添加一个监听红点位置的函数
function checkHoverTargets(eyeX, eyeY) {
  var targets = document.querySelectorAll(".hover-target"); // 选择所有需要触发 hover 的元素，这里使用类选择器 ".hover-target"

  targets.forEach(function (target) {
    // 计算目标元素的边界
    var targetLeft = target.offsetLeft;
    var targetRight = targetLeft + target.offsetWidth;
    var targetTop = target.offsetTop;
    var targetBottom = targetTop + target.offsetHeight;

    // 判断红点是否在目标元素的区域内
    if (
      eyeX >= targetLeft &&
      eyeX <= targetRight &&
      eyeY >= targetTop &&
      eyeY <= targetBottom
    ) {
      // 在这里触发 hover 事件，你可以使用你项目中的 hover 效果的实现方式
      triggerHover(target);
    } else {
      // 如果红点不在目标元素的区域内，可以在这里执行取消 hover 的操作
      cancelHover(target);
    }
  });
}

// 触发 hover 事件的函数，你需要根据项目中的实际需求来实现
function triggerHover(element) {
  // 例如，添加一个 CSS 类来模拟 hover 效果
  element.classList.add("hovered");
}

// 取消 hover 事件的函数
function cancelHover(element) {
  // 例如，移除之前添加的 CSS 类
  element.classList.remove("hovered");
}
