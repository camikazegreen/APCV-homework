document.addEventListener('DOMContentLoaded', function() {
    var x = document.lastModified;
    document.getElementById('lastModified').textContent = x;

    var links = document.querySelectorAll('.side-nav a');
    var companies = document.querySelectorAll('#companies div')

    // Add hover event listeners to each link
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            var company = this.dataset.company;
            document.getElementById(company).style = "display:block";
            
            document.getElementById('instructions').style = "display:none";
        });
        link.addEventListener('mouseleave', function() {
            var company = this.dataset.company;
            document.getElementById(company).style = "display:none";
        });
    });
});