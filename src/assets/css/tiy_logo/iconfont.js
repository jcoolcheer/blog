;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-biaoqian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M595.138512 963.930903c-26.013467 0-50.481741-10.133801-68.865437-28.53694L88.62855 497.749438c-20.117177-20.117177-30.420847-47.938825-28.254507-76.325339l19.401886-252.067946c3.710508-48.221258 41.401945-85.912695 89.623203-89.623203l252.049526-19.382443c28.819372-2.146896 56.208163 8.081049 76.343759 28.236088l437.644525 437.644525c37.97387 37.993313 37.95545 99.776448 0 137.731898l-271.431969 271.431969C645.620253 953.796078 621.150956 963.930903 595.138512 963.930903zM428.945399 98.644671c-1.50733 0-3.013637 0.056282-4.520967 0.169869L172.374906 118.196982c-29.121248 2.241041-51.893904 25.01472-54.135968 54.135968l-19.401886 252.049526c-1.299599 17.121959 4.915963 33.943067 17.065677 46.092781l437.644525 437.644525c22.227234 22.227234 60.954257 22.227234 83.181491 0l271.431969-271.431969c22.924105-22.924105 22.924105-60.238966 0-83.181491L470.517213 115.860774C459.403085 104.747669 444.635753 98.644671 428.945399 98.644671z"  ></path>' +
    '' +
    '<path d="M299.29455 376.330064c-20.663622 0-40.027645-8.005324-54.550407-22.528086s-22.528086-33.886785-22.528086-54.550407c0-20.644179 8.005324-40.027645 22.528086-54.550407 14.522762-14.522762 33.886785-22.528086 54.550407-22.528086 20.644179 0 40.027645 8.005324 54.550407 22.528086 14.522762 14.522762 22.528086 33.905204 22.528086 54.550407 0 20.663622-8.005324 40.027645-22.528086 54.550407C339.322196 368.32474 319.93873 376.330064 299.29455 376.330064zM299.29455 260.750699c-10.359952 0-20.041452 3.974521-27.275203 11.226692-7.232728 7.252171-11.226692 16.933671-11.226692 27.275203 0 10.359952 3.974521 20.041452 11.226692 27.275203 14.46648 14.484899 40.046065 14.484899 54.550407 0 7.252171-7.232728 11.226692-16.915251 11.226692-27.275203 0-10.341532-3.992941-20.023032-11.226692-27.275203C319.317583 264.74364 309.636083 260.750699 299.29455 260.750699z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msnui-tag" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M944.76 516.525q47.922 55.059 1.020 107.059l-330.353 332.392q-21.412 17.333-48.941 15.294t-42.824-17.333q-123.373-123.373-220.235-221.255l-81.569-81.569q-39.765-39.765-70.863-71.373t-50.98-51.49-20.902-21.922q-3.059-4.078-10.706-14.784t-7.647-26v-61.176q0-23.451 0.51-53.020t0.51-60.157q1.020-71.373 2.039-159.059 1.020 0 1.020-1.020 2.039-13.255 4.588-25.49t13.765-23.451q10.196-11.216 23.451-15.294t24.471-4.078h336.471q2.039 0 9.176 0.51t10.196 1.529q12.235 5.098 22.431 13.255zM215.74 282.015q27.529 0 46.902-19.882t19.373-47.412-19.373-46.902-46.902-19.373-46.902 19.373-19.373 46.902 19.373 47.412 46.902 19.882z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M930.688 361.44"  ></path>' +
    '' +
    '<path d="M128.064 315.84l106.944 549.376c11.68 53.728 41.536 95.488 92.416 95.488L698.432 960.704c50.848 0 80.736-41.792 92.384-95.488l106.976-549.376L128.064 315.84 128.064 315.84zM678.272 167.072"  ></path>' +
    '' +
    '<path d="M710.272 167.072c-17.6 0-40.576-11.552-51.072-25.696l-10.976-14.784c-10.496-14.112-33.472-25.696-51.072-25.696l-168.512 0c-17.6 0-40.576 11.552-51.072 25.696l-10.976 14.784c-10.496 14.112-33.472 25.696-51.072 25.696l-217.088 0c-17.6 0-32 14.4-32 32l0 18.656c0 17.6 14.4 32 32 32L927.36 249.728c17.6 0 32-14.4 32-32l0-18.656c0-17.6-14.4-32-32-32L710.272 167.072z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sad" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M486.4 1024c-129.9456 0-252.0576-50.5856-343.9616-142.4384s-142.4384-214.016-142.4384-343.9104c0-129.9456 50.5856-252.0576 142.4384-343.9616s214.016-142.4896 343.9616-142.4896c129.9456 0 252.0576 50.5856 343.9616 142.4896s142.4384 214.016 142.4384 343.9616-50.5856 252.0576-142.4384 343.9104c-91.8528 91.8528-214.016 142.4384-343.9616 142.4384zM486.4 102.4c-239.9744 0-435.2 195.2256-435.2 435.2s195.2256 435.2 435.2 435.2 435.2-195.2256 435.2-435.2-195.2256-435.2-435.2-435.2z"  ></path>' +
    '' +
    '<path d="M332.8 409.6c-42.3424 0-76.8-34.4576-76.8-76.8s34.4576-76.8 76.8-76.8 76.8 34.4576 76.8 76.8-34.4576 76.8-76.8 76.8zM332.8 307.2c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6 25.6-11.4688 25.6-25.6-11.4688-25.6-25.6-25.6z"  ></path>' +
    '' +
    '<path d="M640 409.6c-42.3424 0-76.8-34.4576-76.8-76.8s34.4576-76.8 76.8-76.8 76.8 34.4576 76.8 76.8-34.4576 76.8-76.8 76.8zM640 307.2c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6 25.6-11.4688 25.6-25.6-11.4688-25.6-25.6-25.6z"  ></path>' +
    '' +
    '<path d="M281.5488 768c-5.376 0-10.752-1.6896-15.36-5.12-11.3152-8.4992-13.568-24.5248-5.0688-35.84 25.7024-34.2016 59.3408-62.5152 97.3312-81.92 39.8336-20.3776 82.8928-30.6688 127.9488-30.6688s88.1152 10.3424 127.9488 30.6688c37.9904 19.4048 71.6288 47.7184 97.3312 81.92 8.4992 11.3152 6.1952 27.3408-5.0688 35.84s-27.3408 6.1952-35.84-5.0688c-43.9808-58.5728-111.2064-92.16-184.3712-92.16s-140.3392 33.5872-184.3712 92.16c-5.0176 6.7072-12.6976 10.24-20.48 10.24z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tianjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM768 544 544 544 544 768c0 17.664-14.336 32-32 32S480 785.664 480 768L480 544 256 544C238.336 544 224 529.664 224 512S238.336 480 256 480l224 0L480 256c0-17.664 14.336-32 32-32S544 238.336 544 256l0 224L768 480c17.664 0 32 14.336 32 32S785.664 544 768 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xihuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M513.191128 217.154785c0 0-23.754007-15.917528-59.467393-33.171494-42.261523-20.418029-101.269451-42.707684-157.476591-42.707684-26.224268 0-233.632061 16.688077-233.632061 231.247758 0 326.607616 450.575022 510.201028 450.575022 510.201028s448.693162-178.824805 448.191742-510.201028c0.50142-206.215642-153.768129-231.247758-238.399645-231.247758C634.775254 141.275607 513.191128 217.154785 513.191128 217.154785z"  ></path>' +
    '' +
    '<path d="M512.582261 193.069227c-27.373441-16.884552-301.089429-183.683463-449.967178 69.244061-139.695622 391.755382 449.383894 642.124639 449.383894 642.124639s579.541279-232.631268 451.618794-640.760572C852.15312 21.783119 557.455261 149.178601 512.582261 193.069227l-0.583285 48.607044c7.212262-1.672082 289.424762-195.110723 409.151587 22.001083 114.610294 399.941831-409.151587 597.099167-409.151587 597.099167s-549.686321-242.011916-404.376841-597.099167c151.449317-217.96422 398.833591-21.48943 404.376841-22.001083L512.582261 193.069227z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanjing1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1023.619 511.873c0 98.048-210.945 307.137-511.617 307.137C219.009 819.074 0.384 613.378 0.384 511.873c0-101.44 219.585-306.817 511.617-306.817C814.978 205.057 1023.683 410.433 1023.619 511.873L1023.619 511.873zM512.449 261.121c-136.192 0-246.529 112.32-246.529 250.881s110.4 250.945 246.529 250.945c136.192 0 246.593-112.384 246.593-250.945S648.642 261.121 512.449 261.121L512.449 261.121zM512.001 351.873c-86.72 0-156.992 71.552-156.992 159.808s70.272 159.744 156.992 159.744 156.992-71.552 156.992-159.808S598.721 351.873 512.001 351.873L512.001 351.873z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kaixin" viewBox="0 0 1031 1024">' +
    '' +
    '<path d="M879.75 149.875C782.375 53.25 653 0 515.25 0s-267.125 53.25-364.375 149.875S0 375.25 0 512s53.625 265.375 150.875 362.125S377.625 1024 515.25 1024c137.75 0 267.25-53.25 364.5-150C1080.625 674.375 1080.625 349.625 879.75 149.875zM832.25 826.75C747.625 910.875 635 957.25 515.25 957.25c-119.75 0-232.25-46.375-316.875-130.375-84.625-84.125-131.25-195.875-131.25-314.875s46.75-230.75 131.25-314.875c84.75-84.125 197.25-130.375 316.875-130.375s232.25 46.25 316.875 130.375C1006.875 370.75 1006.875 653.25 832.25 826.75z"  ></path>' +
    '' +
    '<path d="M331.625 321.125c-34.75 0-63.125 28.125-63.125 62.75s28.25 62.75 63.125 62.75c34.875 0 63.125-28.125 63.125-62.75C394.75 349.125 366.5 321.125 331.625 321.125L331.625 321.125 331.625 321.125 331.625 321.125 331.625 321.125z"  ></path>' +
    '' +
    '<path d="M698.75 321.125c-34.75 0-63.125 28.125-63.125 62.75S663.875 446.5 698.75 446.5c34.875 0 63.125-28.125 63.125-62.75C761.875 349.125 733.625 321.125 698.75 321.125L698.75 321.125 698.75 321.125 698.75 321.125 698.75 321.125z"  ></path>' +
    '' +
    '<path d="M758.25 607.5c-11.625 0-22.625 7.125-27 18.75-33.5 89.75-120.375 150-216.125 150S332.5 716 299 626.25c-5.5-14.875-22.125-22.5-37-16.875-14.875 5.5-22.5 22.125-16.875 37 20.375 54.5 56.25 101.125 103.875 134.75 48.75 34.5 106.25 52.75 166.125 52.75S632.5 815.5 681.25 781.125c47.625-33.75 83.625-80.25 103.875-134.75 5.5-14.875-2-31.375-16.875-37C765 608.125 761.625 607.5 758.25 607.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fennu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.7696 0.8704C229.7856 0.8704 0.3584 230.272 0.3584 512.256c0 281.984 229.376 511.4112 511.4112 511.4112 282.0096 0 511.36-229.4272 511.36-511.4112S793.7536 0.8704 511.7696 0.8704z m0 962.6112c-248.832 0-451.2256-202.4192-451.2256-451.2256 0-248.8064 202.3936-451.2512 451.2256-451.2512 248.832 0 451.2256 202.4192 451.2256 451.2256 0 248.832-202.4192 451.2512-451.2256 451.2512z"  ></path>' +
    '' +
    '<path d="M779.4688 291.5328l-201.5488 122.9824 41.8304 54.8352a67.8912 67.8912 0 0 0-13.4656 40.6016c0 35.8912 26.8288 65.024 59.9296 65.024 33.0752 0 59.9296-29.1072 59.9296-65.024 0-31.616-20.8128-57.9072-48.384-63.744l-11.52-15.104 144.5632-88.192-31.3344-51.3792zM417.2288 509.9776c0-15.4368-5.1968-29.44-13.4656-40.576l41.8304-54.8608-201.5488-122.9824-31.3088 51.3536 144.5632 88.192-11.52 15.104c-27.5712 5.8368-48.384 32.128-48.384 63.744 0 35.8912 26.8288 65.024 59.904 65.024 33.1264 0 59.904-29.1072 59.904-64.9984zM365.7216 807.552h292.0704v-141.3888H365.7216v141.3888z m124.5696-30.08v-81.2032h36.5824v81.2032h-36.608z m137.4208 0h-70.7584v-81.2032h70.7584v81.2032z m-231.936-81.2288h64.4096v81.2032H395.776v-81.2032z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M250.488 760.197l201.182-85.651-123.498-121.506z"  ></path>' +
    '' +
    '<path d="M848.058 286.126l-127.481-131.465-369.497 364.517 132.461 137.441z"  ></path>' +
    '' +
    '<path d="M953.082 128.875c0 0-33.745-37.347-72.585-65.729s-68.717 0-68.717 0l-65.729 65.729 133.45 132.953c0 0 56.269-56.767 73.581-76.186 17.312-19.42 0-56.767 0-56.767z"  ></path>' +
    '' +
    '<path d="M810.959 829.037c0 9.216-7.471 16.687-16.687 16.687h-622.191c-9.216 0-16.687-7.471-16.687-16.687v-617.268c0-9.216 7.471-16.687 16.687-16.687h395.56l82.39-87.664h-562.675c-11.12 0-20.135 9.014-20.135 20.135v785.701c0 11.12 9.014 20.135 20.135 20.135h791.641c11.12 0 20.135-9.014 20.135-20.135v-561.173l-88.171 81.839v395.117z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)