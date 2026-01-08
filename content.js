const styleElement=document.createElement("style");function updateBlurState(t){t?styleElement.textContent=`
      a.blur::after {
        display: none !important;
        backdrop-filter: none !important;
        background-color: transparent !important;
        width: 0 !important;
        height: 0 !important;
      }

      a.blur::before {
        display: none !important;
        content: "" !important;
        padding: 0 !important;
      }

      a.blur {
        filter: none !important;
        -webkit-filter: none !important;
        opacity: 1 !important;
        cursor: pointer !important;
        position: relative !important;
        z-index: 0 !important; 
      }
      
      a.blur.unverified::before {
        content: "" !important;
        display: none !important;
      }
    `:styleElement.textContent=""}styleElement.id="tf4t-tweak-style",document.head.appendChild(styleElement),chrome.storage.local.get(["removeBlur"],t=>{updateBlurState(t.removeBlur)}),chrome.runtime.onMessage.addListener((t,e,n)=>{"TOGGLE_BLUR"===t.type&&updateBlurState(t.value)});