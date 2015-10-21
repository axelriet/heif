// Copyright (c) 2015, Nokia Technologies Ltd.
// All rights reserved.
//
// Licensed under the Nokia High-Efficiency Image File Format (HEIF)
// License (the "License").
//
// You may not use the High-Efficiency Image File Format except in
// compliance with the License.
// The License accompanies the software and can be found in the file
// "LICENSE.TXT".
//
// You may also obtain the License at:
// https://nokiatech.github.io/heif/license.txt
//

function Examples () {

    var self = this;

    this._img = null;
    this._heicId = "heic-image";

    var gridHint = "Click on the images to enlarge their view. Click again to go back.";
    var coverHint = "Click on the thumbnail images to enlarge their view.";

    this._exampleContentMapping = {
        "still-1": {
            title: "Single image",
            element: "img",
            content: "content/images/autumn_1440x960.heic",
            thumb: "content/pngs/autumn_512x339.png",
            detail: "File size: 575 kB, Resolution: 1440x960"
        },
        "still-2": {
            title: "Single image",
            element: "img",
            content: "content/images/cheers_1440x960.heic",
            thumb: "content/pngs/cheers_512x341.png",
            detail: "File size: 213 kB, Resolution: 1440x960"
        },
        "still-3": {
            title: "Single image",
            element: "img",
            content: "content/images/crowd_1440x960.heic",
            thumb: "content/pngs/crowd_512x341.png",
            detail: "File size: 81 kB, Resolution: 1440x960"
        },
        "still-4": {
            title: "Single image",
            element: "img",
            content: "content/images/old_bridge_1440x960.heic",
            thumb: "content/pngs/old_bridge_512x340.png",
            detail: "File size: 525 kB, Resolution: 1440x960"
        },
        "still-5": {
            title: "Single image",
            element: "img",
            content: "content/images/ski_jump_1440x960.heic",
            thumb: "content/pngs/ski_jump_512x341.png",
            detail: "File size: 107 kB, Resolution: 1440x960"
        },
        "still-6": {
            title: "Single image",
            element: "img",
            content: "content/images/spring_1440x960.heic",
            thumb: "content/pngs/spring_512x341.png",
            detail: "File size: 475 kB, Resolution: 1440x960"
        },
        "still-7": {
            title: "Single image",
            element: "img",
            content: "content/images/summer_1440x960.heic",
            thumb: "content/pngs/summer_512x281.png",
            detail: "File size: 127 kB, Resolution: 1440x960"
        },
        "still-8": {
            title: "Single image",
            element: "img",
            content: "content/images/surfer_1440x960.heic",
            thumb: "content/pngs/surfer_512x351.png",
            detail: "File size: 213 kB, Resolution: 1440x960"
        },
        "still-9": {
            title: "Single image",
            element: "img",
            content: "content/images/winter_1440x960.heic",
            thumb: "content/pngs/winter_512x342.png",
            detail: "File size: 166 kB, Resolution: 1440x960"
        },
        "collection-1": {
            title: "Image collection",
            element: "img",
            content: "content/images/random_collection_1440x960.heic",
            thumb: "content/pngs/cheers_512x341.png",
            detail: "File size: 614 kB",
            hint: gridHint
        },
        "collection-2": {
            title: "Image collection",
            element: "img",
            fps: "0",
            type: "cover",
            content: "content/images/season_collection_1440x960.heic",
            thumb: "content/pngs/winter_512x342.png",
            detail: "File size: 1.3 MB",
            hint: coverHint
        },
        "burst-1": {
            title: "Image burst",
            element: "img",
            fps: "0",
            type: "grid",
            content: "content/image_sequences/bmx_burst.heic",
            thumb: "content/pngs/bmx_512x310.png",
            detail: "File size: 2.4 MB",
            hint: gridHint
        },
        "burst-2": {
            title: "Image burst",
            element: "img",
            fps: "0",
            type: "grid",
            content: "content/image_sequences/skateboard_burst.heic",
            thumb: "content/pngs/skateboard_512x294.png",
            detail: "File size: 1.3 MB",
            hint: gridHint
        },
        "burst-3": {
            title: "Image burst: Video & HD images",
            element: "img",
            fps: "0",
            content: "content/image_sequences/bmx_burst.heic",
            burstVideo: "content/image_sequences/bmx_burst.heic",
            burstFps: "24",
            thumb: "content/pngs/bmx_512x310.png",
            detail: "File size: 2.4 MB"
        },
        "burst-4": {
            title: "Image burst: Video & HD images",
            element: "img",
            fps: "0",
            content: "content/image_sequences/skateboard_burst.heic",
            burstVideo: "content/image_sequences/skateboard_burst.heic",
            burstFps: "24",
            thumb: "content/pngs/skateboard_512x294.png",
            detail: "File size: 1.3 MB"
        },
        "sequence-1": {
            title: "Image sequence",
            element: "img",
            content: "content/image_sequences/stars_animation.heic",
            thumb: "content/pngs/stars_512x342.png",
            detail: "File size: 146 kB",
            heifFixed512px: true
        },
        "sequence-2": {
            title: "Image sequence",
            element: "img",
            fps: "3",
            content: "content/image_sequences/waves_animation.heic",
            thumb: "content/pngs/waves_512x297.png",
            detail: "File size: 585 kB",
            heifFixed512px: true
        },
        "grid-1": {
            title: "Derived Grid",
            element: "img",
            content: "content/overlay_grid_alpha/grid_960x640.heic",
            thumb: "content/pngs/winter_512x342.png",
            detail: "File size: 158 kB, Resolution: 960x640"
        },
        "overlay-1": {
            title: "Derived Overlay",
            element: "img",
            content: "content/overlay_grid_alpha/overlay_1000x680.heic",
            thumb: "content/pngs/autumn_512x339.png",
            detail: "File size: 158 kB, Resolution: 1000x680"
        },
        "alpha-1": {
            title: "Alpha Mask",
            element: "img",
            content: "content/overlay_grid_alpha/alpha_1440x960.heic",
            thumb: "content/pngs/winter_512x342.png",
            detail: "File size: 278 kB, Resolution: 1440x960"
        }
    };

    this._scrollY = 0;

    this.initialize = function () {
        console.log("Examples.");

        $("div.heif-example-content").click(function () {
            self.openModal(this.id);
        });

        $("div.heif-examples-modal-quit").click(function () {
            self.closeModal();
        });

        for (var key in this._exampleContentMapping) {
            if (this._exampleContentMapping.hasOwnProperty(key)) {
                var title = this._exampleContentMapping[key].title;
                if (title) {
                    $("div#" + key).find("div.heif-example-title").html(this._exampleContentMapping[key].title);
                }
                var thumb = this._exampleContentMapping[key].thumb;
                if (thumb) {
                    $("div#" + key).css('background-image', 'url("' + thumb + '")');
                }
            }
        }
    };

    var modalBackdropElement = "div#heif-examples-modal-backdrop";
    var modalWindowElement = "div#heif-examples-modal-window";
    var modalContentElementId = "heif-examples-modal-content";
    var modalContentElement = "div#" + modalContentElementId;

    this.openModal = function (id) {
        var modalTitle = $("div#heif-examples-modal-title");
        modalTitle.html(self._exampleContentMapping[id].detail);

        self.injectModalContent(id);
        self._scrollY = $(window).scrollTop();
        $(window).scrollTop(0);

        $(modalBackdropElement).addClass("display").fadeTo("fast", 0.9,
            function() {
                $(modalWindowElement).addClass("display");
            });
    };

    this.closeModal = function () {
        var modalContainer = $(modalBackdropElement);
        modalContainer.fadeTo("fast", 0, function () {
            modalContainer.removeClass("display");
            $(modalWindowElement).removeClass("display");
            var modalContent = $(modalContentElement).empty();
        });
        $(window).scrollTop(self._scrollY);
    };

    this.injectModalContent = function (id) {
        self.img = document.createElement(self._exampleContentMapping[id].element);
        self.img.src = self._exampleContentMapping[id].content;
        self.img.id = self._heicId;

        if (self._exampleContentMapping[id].heifFixed512px !== undefined) {
            self.img.className = "heif-fixed-512px";
        }

        if (self._exampleContentMapping[id].fps) {
            self.img.setAttribute("fps", self._exampleContentMapping[id].fps);
        }

        if (self._exampleContentMapping[id].type) {
            self.img.setAttribute("type", self._exampleContentMapping[id].type);
        }

        var hintElement = $("div#heif-examples-modal-hint");
        if (self._exampleContentMapping[id].hint) {
            hintElement.html(self._exampleContentMapping[id].hint);
            hintElement.fadeTo("fast", 1.0);
        } else {
            hintElement.html("");
        }

        var modalContent = document.getElementById(modalContentElementId);
        modalContent.appendChild(self.img);

        if (self._exampleContentMapping[id].burstVideo) {
            var burstVideoElement = document.createElement("img");
            burstVideoElement.src = self._exampleContentMapping[id].burstVideo;
            burstVideoElement.setAttribute("fps", self._exampleContentMapping[id].burstFps);
            burstVideoElement.className = "heif-burst-video";
            modalContent.appendChild(burstVideoElement);
        }

        modalContent.onclick = function () {
            hintElement.fadeTo("fast", 0.0);
        };

        processImageElements();
        processVideoElements();
    };

    this.initialize();
}
