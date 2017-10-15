<<<<<<< HEAD
(function () {
    const jobProfile = [{
            companyName: "MAQ Software PVT. LTD., Hyderabad",
            duration: "June, 2015 - March, 2017",
            position: "Software Engineer 1"
        },
        {
            companyName: "MAQ Software PVT. LTD., Hyderabad",
            duration: "March, 2017 - April, 2017",
            position: "Software Engineer 2"
        },
        {
            companyName: "Cashcare Technology PVT. LTD., Hyderabad",
            duration: "April, 2017 - Present",
            position: "Software Developer"
        }
    ];
    
    const skillsProfile = [{   
        title: "HTML/HTML5",
        percentage: "70",
        color: "#d9534f"
    },
    {
        title: "CSS / CSS3",
        percentage: "70",
        color: "#d9534f"
    },
    {
        title: "Javascript ES6",
        percentage: "60",
        color: "#d9534f"
    },
    {
        title: "jQuery",
        percentage: "60",
        color: "#d9534f"
    },
    {
        title: "Bootstrap",
        percentage: "60",
        color: "#d9534f"
    },
    {
        title: "Gulp.js",
        percentage: "50",
        color: "#d9534f"
    },
    {
        title: "React JS",
        percentage: "20",
        color: "#d9534f"
    },
    {
        title: "Angular JS",
        percentage: "20",
        color: "#d9534f"
    },
    {
        title: "MS SQL",
        percentage: "40",
        color: "#d9534f"
    }];

    function ProgressBar(JSONObject, containerID) {
        this.JSONObject = JSONObject;
        this.containerID = containerID;
    }
    ProgressBar.prototype.createHTML = function () {

        var JSONObject = this.JSONObject,
            containerID = this.containerID,
            htmlContent = "";

        htmlContent = '<div class="row nopadding">';
        for (var index = 0; index < JSONObject.length; index++) {
            htmlContent += '<div class="col-xs-12 col-sm-6 no-left-padding"><div class="progress">' +
                                '<div class="progress-bar" style="background-color:' + JSONObject[index].color + ';width: ' + JSONObject[index].percentage + '%" title="' + JSONObject[index].percentage + '%" role="progressbar" aria-valuenow="' + JSONObject[index].percentage + '" aria-valuemin="0" aria-valuemax="100">' +
                                '</div>' +
                                '<span class="progress-type">' + JSONObject[index].title + '</span>' +
                                '<span class="progress-completed">' + JSONObject[index].percentage + '%</span>' +
                            '</div></div>';
        }

        htmlContent += '</div>';
        $("#" + containerID).html(htmlContent);
    }

    function Timeline(JSONObject, containerID) {
        this.JSONObject = JSONObject;
        this.containerID = containerID;
    }
    Timeline.prototype.createHTML = function () {
        var JSONObject = this.JSONObject,
            containerID = this.containerID,
            htmlContent = "";

        htmlContent = '<div class="experience">';

        for (var index = 0; index < JSONObject.length; index++) {
            htmlContent += '<ul class="timeline-item">' +
                '<li class="date">' + JSONObject[index].duration + '</li>' +
                '<li class="company uppercase">' +
                '<a>' + JSONObject[index].companyName + '</a>' +
                '</li>' +
                '<li class="position">' + JSONObject[index].position + '</li>' +
                '</ul>';
        }

        $("#" + containerID).html(htmlContent);
    }

    function mainFunction() {
        var jobTimeline = new Timeline(jobProfile, 'jobProfileTimeline');
        jobTimeline.createHTML();
        var skillsProgress = new ProgressBar(skillsProfile, 'skills-progressbar');
        skillsProgress.createHTML();
    }
    mainFunction();
})();