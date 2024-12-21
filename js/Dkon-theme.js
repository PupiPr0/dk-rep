var $infobox = $('#info-box');

$(document).ready(function() {

    const $themeSwitchButton = $('#switch-theme-button');
    const theme = document.querySelector("#theme-css");

    // Change system theme if theme not specified earlier in the settings

    if (typeof $.cookie('theme-night') === 'undefined') {

        switchTheme(true);
    }

    updateSwitchButton();

    $(document).on("change", "input[name='switch-theme-button']", function () {

        switchTheme(false)
    });

    function switchTheme(s) {

        if (typeof s == "boolean") {

            if (s) {

                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

                    theme.href = "/css/root-night.css";

                } else {

                    theme.href = "/css/root.css";
                }

                $.removeCookie('theme-night', { path: '/' });

            } else {

                if (theme.getAttribute("href") == "/css/root.css") {

                    // ... then switch it to night theme
                    theme.href = "/css/root-night.css";
                    $.cookie("theme-night", true, { path: '/'});

                } else {

                    // ... switch it to default theme
                    theme.href = "/css/root.css";
                    $.cookie("theme-night", false, { path: '/'});
                }
            }
        }

        updateSwitchButton();
    }

    function updateSwitchButton() {

        if (theme.getAttribute("href") === "/css/root.css") {

            // ... then switch it to night theme
            $themeSwitchButton.removeAttr('checked');

        } else {

            // ... switch it to default theme
            $themeSwitchButton.attr('checked','checked')
        }
    }

    
