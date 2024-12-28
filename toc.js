// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded "><a href="teach.html"><strong aria-hidden="true">1.</strong> Teaching Yourself CS</a></li><li class="chapter-item expanded "><a href="languages.html"><strong aria-hidden="true">2.</strong> Programming Languages</a></li><li class="chapter-item expanded "><a href="compilers.html"><strong aria-hidden="true">3.</strong> Compilers</a></li><li class="chapter-item expanded "><a href="algs.html"><strong aria-hidden="true">4.</strong> Algorithms &amp; Data Structures</a></li><li class="chapter-item expanded "><a href="software-design.html"><strong aria-hidden="true">5.</strong> Software Design</a></li><li class="chapter-item expanded "><a href="testing.html"><strong aria-hidden="true">6.</strong> Software Testing</a></li><li class="chapter-item expanded "><a href="ipc.html"><strong aria-hidden="true">7.</strong> Inter-Process Communication (IPC)</a></li><li class="chapter-item expanded "><a href="io.html"><strong aria-hidden="true">8.</strong> I/O</a></li><li class="chapter-item expanded "><a href="db.html"><strong aria-hidden="true">9.</strong> Databases</a></li><li class="chapter-item expanded "><a href="system-design.html"><strong aria-hidden="true">10.</strong> Microservices, Distributed Systems &amp; System Design</a></li><li class="chapter-item expanded "><a href="cloud.html"><strong aria-hidden="true">11.</strong> Cloud Computing, Containers &amp; DevOps</a></li><li class="chapter-item expanded "><a href="local-first.html"><strong aria-hidden="true">12.</strong> Local-First</a></li><li class="chapter-item expanded "><a href="self-hosting.html"><strong aria-hidden="true">13.</strong> Self-Hosting</a></li><li class="chapter-item expanded "><a href="security.html"><strong aria-hidden="true">14.</strong> Security</a></li><li class="chapter-item expanded "><a href="fe.html"><strong aria-hidden="true">15.</strong> HTML, CSS &amp; JS</a></li><li class="chapter-item expanded "><a href="networks.html"><strong aria-hidden="true">16.</strong> Networking, Web &amp; Browsers</a></li><li class="chapter-item expanded "><a href="social.html"><strong aria-hidden="true">17.</strong> Social Networks</a></li><li class="chapter-item expanded "><a href="unix.html"><strong aria-hidden="true">18.</strong> UNIX/Linux</a></li><li class="chapter-item expanded "><a href="system-programming.html"><strong aria-hidden="true">19.</strong> System Programming</a></li><li class="chapter-item expanded "><a href="term.html"><strong aria-hidden="true">20.</strong> Terminal</a></li><li class="chapter-item expanded "><a href="from-scratch.html"><strong aria-hidden="true">21.</strong> From Scratch</a></li><li class="chapter-item expanded "><a href="playgrounds.html"><strong aria-hidden="true">22.</strong> Playgrounds</a></li><li class="chapter-item expanded "><a href="metal.html"><strong aria-hidden="true">23.</strong> Embedded Systems &amp; Electronics</a></li><li class="chapter-item expanded "><a href="foss.html"><strong aria-hidden="true">24.</strong> Open Source, DIY &amp; Right to Repair</a></li><li class="chapter-item expanded "><a href="reverse.html"><strong aria-hidden="true">25.</strong> Reverse Engineering</a></li><li class="chapter-item expanded "><a href="math.html"><strong aria-hidden="true">26.</strong> Math</a></li><li class="chapter-item expanded "><a href="music.html"><strong aria-hidden="true">27.</strong> Music</a></li><li class="chapter-item expanded "><a href="games.html"><strong aria-hidden="true">28.</strong> Games</a></li><li class="chapter-item expanded "><a href="mldl.html"><strong aria-hidden="true">29.</strong> Machine Learning and Deep Learning</a></li><li class="chapter-item expanded "><a href="misc.html"><strong aria-hidden="true">30.</strong> Best Practices, Common Pitfalls, Curious Stuff &amp; Basic Things You Should Know</a></li><li class="chapter-item expanded "><a href="classics.html"><strong aria-hidden="true">31.</strong> Classics &amp; Bibles</a></li><li class="chapter-item expanded "><a href="essays.html"><strong aria-hidden="true">32.</strong> Essays</a></li><li class="chapter-item expanded "><a href="history.html"><strong aria-hidden="true">33.</strong> CS/FOSS History and Hacking/Cyberpunk Culture</a></li><li class="chapter-item expanded "><a href="licenses.html"><strong aria-hidden="true">34.</strong> Software Licenses</a></li><li class="chapter-item expanded "><a href="team.html"><strong aria-hidden="true">35.</strong> Development and Team Organization</a></li><li class="chapter-item expanded "><a href="job.html"><strong aria-hidden="true">36.</strong> Job Hunting</a></li><li class="chapter-item expanded "><a href="blogs.html"><strong aria-hidden="true">37.</strong> Finest Sources of Geek Entertainment</a></li><li class="chapter-item expanded "><a href="fun.html"><strong aria-hidden="true">38.</strong> Funny Things with Hack Value</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
