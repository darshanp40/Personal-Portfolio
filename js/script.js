(function(){
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
    }];
    function Timeline(JSONObject, containerID) {
        this.JSONObject = JSONObject;
        this.containerID = containerID;
    }
    Timeline.prototype.createHTML = function() {
        var JSONObject = this.JSONObject,
            containerID = this.containerID,
            html = "";

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

        htmlContent += '</div>';
        $("#" + containerID).html(htmlContent);
    }
    function mainFunction() {
        var jobTimeline = new Timeline(jobProfile, 'jobProfileTimeline');
        jobTimeline.createHTML();
    }
    mainFunction();
})();