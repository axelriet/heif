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

"use strict";

function Comparison () {
    var self = this;

    this.initializeSequencesComparison = function () {
        var img = document.getElementById("heif-image");
        img.setAttribute("src", "content/image_sequences/stars_animation.heic");

        // Show the gif when HEIF has loaded
        img.onload = function() {
            var loadingText = document.getElementById("sequences-comparison-loading");
            loadingText.style.visibility = "hidden";
            loadingText.style.opacity = 0;

            var heifText = document.createElement("p");
            heifText.innerHTML = "HEIF: 146 KB";
            var heifContainer = document.getElementById("heif-container");
            heifContainer.appendChild(heifText);
            heifContainer.style.opacity = 1;

            var gif = document.getElementById("gif-image");
            gif.setAttribute("src", "content/Animated_Gifs/stars_256x144p25.gif");
            var gifContainer = document.getElementById("gif-container");
            gifContainer.style.opacity = 1;

            var gifText = document.createElement("p");
            gifText.innerHTML = "GIF: 779 KB";
            gifContainer.appendChild(gifText);
        };

        var img2 = document.getElementById("heif-image-2");
        img2.setAttribute("src", "content/image_sequences/waves_animation.heic");

        // Show the gif when HEIF has loaded
        img2.onload = function() {
            var loadingText = document.getElementById("sequences-comparison-loading-2");
            loadingText.style.visibility = "hidden";
            loadingText.style.opacity = 0;

            var heifText = document.createElement("p");
            heifText.innerHTML = "HEIF: 585 KB";
            var heifContainer = document.getElementById("heif-container-2");
            heifContainer.appendChild(heifText);
            heifContainer.style.opacity = 1;

            var gif = document.getElementById("gif-image-2");
            gif.setAttribute("src", "content/Animated_Gifs/waves_256x144p25.gif");
            var gifContainer = document.getElementById("gif-container-2");
            gifContainer.style.opacity = 1;

            var gifText = document.createElement("p");
            gifText.innerHTML = "GIF: 1.5 MB";
            gifContainer.appendChild(gifText);
        };
    };

    this._imageComparisonMapping = {
        "comparison-1": {
            heicUrl: "content/quality_comp_candidate1/cheers_1440x960_66KB.heic",
            jpgUrl: "content/quality_comp_candidate1/cheers_1440x960_66KB.jpg",
            heicText: "HEIF: 66 KB",
            jpgText: "JPG: 66 KB",
            crop: {x: 420, y: 200, w: 400, h: 400}
        },
        "comparison-2": {
            heicUrl: "content/quality_comp_candidate1/ski_jump_1440x960_58KB.heic",
            jpgUrl: "content/quality_comp_candidate1/ski_jump_1440x960_60KB.jpg",
            heicText: "HEIF: 58 KB",
            jpgText: "JPG: 60 KB",
            crop: {x: 500, y: 140, w: 400, h: 400}
        },
        "comparison-3": {
            heicUrl: "content/quality_comp_candidate1/surfer_1440x960_81KB.heic",
            jpgUrl: "content/quality_comp_candidate1/surfer_1440x960_87KB.jpg",
            heicText: "HEIF: 81 KB",
            jpgText: "JPG: 87 KB",
            crop: {x: 600, y: 320, w: 400, h: 400}
        }
    };

    this.initializeImageComparison = function () {
        for (var key in this._imageComparisonMapping) {
            if (this._imageComparisonMapping.hasOwnProperty(key)) {
                var heicUrl = this._imageComparisonMapping[key].heicUrl;
                if (heicUrl) {
                    var img = document.createElement("img");
                    img.src = heicUrl;
                    img.user = key;
                    img.onload = function () {
                        var key = this.user;
                        var canvas = document.createElement("canvas");
                        var crop = self._imageComparisonMapping[key].crop;
                        canvas.width = crop.w;
                        canvas.height = crop.h;
                        var dstCtx = canvas.getContext('2d');
                        dstCtx.drawImage(this, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);
                        $("div#" + key + "-crop").find("div.heif-image-comparison-heif").append(canvas);
                    };

                    $("div#" + key).find("div.heif-image-comparison-heif").append(img);

                    var text = document.createElement("p");
                    text.innerHTML = this._imageComparisonMapping[key].heicText;
                    $("div#" + key).find("div.heif-image-comparison-heif").append(text);

                    text = document.createElement("p");
                    text.innerHTML = this._imageComparisonMapping[key].heicText;
                    $("div#" + key + "-crop").find("div.heif-image-comparison-heif").append(text);
                }

                var jpgUrl = this._imageComparisonMapping[key].jpgUrl;
                if (jpgUrl) {
                    img = document.createElement("img");
                    img.src = jpgUrl;
                    img.user = key;
                    img.onload = function () {
                        var key = this.user;
                        var canvas = document.createElement("canvas");
                        var crop = self._imageComparisonMapping[key].crop;
                        canvas.width = crop.w;
                        canvas.height = crop.h;
                        var dstCtx = canvas.getContext('2d');
                        dstCtx.drawImage(this, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);
                        $("div#" + key + "-crop").find("div.heif-image-comparison-jpg").append(canvas);

                        var naturalWidth = 1440; // Hard-code image dimensions for now, because using img.naturalHeight had some weird timing issues
                        var naturalHeight = 960;
                        var relWidth = crop.w * 100 / naturalWidth;
                        var relHeight = crop.h * 100 / naturalHeight;
                        var left = crop.x * 100 / naturalWidth;
                        var top = crop.y * 100 / naturalHeight;
                        var cropWindowElement = $("div#" + key).find(".heif-image-comparison-crop-window");
                        cropWindowElement.css("width", relWidth + "%");
                        cropWindowElement.css("height", relHeight + "%");
                        cropWindowElement.css("left", left + "%");
                        cropWindowElement.css("top", top + "%");
                    };

                    $("div#" + key).find("div.heif-image-comparison-jpg").append(img);

                    text = document.createElement("p");
                    text.innerHTML = this._imageComparisonMapping[key].jpgText;
                    $("div#" + key).find("div.heif-image-comparison-jpg").append(text);

                    text = document.createElement("p");
                    text.innerHTML = this._imageComparisonMapping[key].jpgText;
                    $("div#" + key + "-crop").find("div.heif-image-comparison-jpg").append(text);
                }
            }
        }

        $(".heif-comparison-crop-title").append("Close-up views from the image above:");
    };

    this.initialize = function () {

        this.initializeSequencesComparison();

        this.initializeImageComparison();

        processImageElements();
        processVideoElements();
    };

    this.initialize();
}
