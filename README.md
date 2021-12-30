## Useful resources for newbies in Java for web-oriented programming:

1. [Web Developer RoadMap](https://github.com/kamranahmedse/developer-roadmap)

2. Java:
     1. Learn Java Fundamentals[^1]:
        1. JRE, JDK & JVM
        2. Byte Code vs. Machine Code
        3. Compiling with `javac` and Running with Arguments from CLI
        4. IDEs
           1. [VSCode](https://code.visualstudio.com/docs/languages/java)
           2. Debugging
           3. [**!OPINION**] [Stop Making Students Use Eclipse](https://nora.codes/post/stop-making-students-use-eclipse/)
        5. Heap & Stack
        6. Variables
        7. Arithmetic & Boolean Expressions
        8. Built-in Types of Data
           1. Default Initialization
           2. Wrappers & Autoboxing
        9. Arrays
        10. The Object Class
            1. `this` & `super` keywords
            2. `equals()` & `hashCode()` methods
        11. Constants & Enumerations
        12. Access Modifiers
        13. Classes & Object-Oriented Programming (OOP) Basic Concepts
            1. Interfaces vs. Abstract Classes (Abstraction)
            2. Nested Classes, Inner Classes & Anonymous Classes
            3. Inheritance vs. Composition
            4. Polymorphism & Upcasting vs. Downcasting
            5. Encapsulation & Data Hiding
        14. Control Flow Statements
        15. Methods
            1. Passing-by-Value vs. Passing-by-Reference
            2. Overloading & Overriding
            3. The `main` method
        16. Exceptions
            1. Throwable, Exception & Error
            2. Checked vs. Unchecked
            3. Try/Catch & Catch-or-Declare Requirement
        17. Collections
            1. Iterable & Iterator
            2. Comparable & Comparator
            3. Sorting & Searching
            4. Stack & Queue
            5. List, Set & Map
        18. I/O
        19. Streams
        20. Lambda Expressions & Method References
        21. Recursion
     2. [Maven](https://maven.apache.org/guides/getting-started/index.html)
     3. C. S. Horstmann, Core Java Fundementals (Vol. 1 & 2)
     4. J. Bloch, Effective Java
     5. Design Patterns:
        * [GoF Design Patterns with examples using Java and UML](https://www.researchgate.net/publication/307449818_GoF_Design_Patterns_with_examples_using_Java_and_UML)
     6. Unit testing:
        1. [Modern Best Practices for Testing in Java](https://phauer.com/2019/modern-best-practices-testing-java/)
        2. [Combining Object Mother and Fluent Builder for the Ultimate Test Data Factory](https://reflectoring.io/objectmother-fluent-builder/)
        3. L. Kosleka, Effective Unit Testing
        4. P. Tahchiev, JUnit in Action
        5. L. Kosleka, Test Driven: TDD and Acceptance TDD for Java Developers
     7. Advanced Topics:
         1. Generics
         2. Reflection
         3. Concurrency, Multi-threading, Parallelism, Asynchronus Programming:
             * [Applying Concurrency and Multi-threading to Common Java Patterns](https://www.pluralsight.com/courses/java-patterns-concurrency-multi-threading)
             * [Advanced Java Concurrent Patterns](https://www.pluralsight.com/courses/java-concurrent-patterns-advanced)
             * [Java Fundamentals: Asynchronous Programming Using CompletionStage](https://www.pluralsight.com/courses/java-fundamentals-asynchronous-programming-completionstage)
             * [JConsole](https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html)
             * [Monitoring threads](http://www.jvmmonitor.org/doc/#Monitoring_threads)
             * [Reactive Programming](https://www.scnsoft.com/blog/java-reactive-programming)
         4. [New language features since Java 8 to 17](https://advancedweb.hu/new-language-features-since-java-8-to-17/)

3. Algorithms & Data Structures:
     1. [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
     2. R. Sedgewick & K. Wayne, Algorithms [1](https://www.coursera.org/learn/algorithms-part1) + [2](https://www.coursera.org/learn/algorithms-part2)
     3. D. Kopec, Classic Computer Science Problems in Java
     4. [Open Data Structures (in Java)](http://opendatastructures.org/ods-java/)
     5. [**!OPINION**] [Data Structures & Algorithms I Used Working at Tech Companies](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/)

4. Software Engineering & System Design:
     * J. Ousterhout, A Philosophy of Software Design
     * M. Kleppmann, [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
     * D. Martin, [The System Design Primer](https://github.com/donnemartin/system-design-primer)
     * T. Winters et al., Software Engineering at Google: Lessons Learned from Programming Over Time
     * Other Influential Books:
       * R. C. Martin, Clean Code
       * A. Hunt & D. Thomas, The Pragmatic Programmer: From Journeyman to Master
       * F. Brooks, The Mythical Man-Month
       * M. Fowler, Patterns of Enterprise Application Architecture
       * GoF, Design Patterns: Elements of Reusable Object-Oriented Software
       * R. C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship
       * K Beck & M. Fowler, Refactoring: Improving the Design of Existing Code
       * [**!BONUS**] D. Norman, [*The Design of Everyday Things*](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)
       * [**!BONUS**] C. Alexander et al., [The Timeless Way of Building](https://en.wikipedia.org/wiki/The_Timeless_Way_of_Building) + [*A Pattern Language: Towns, Buildings Construction*](https://en.wikipedia.org/wiki/A_Pattern_Language)
       * [**!BONUS**] D. H. Meadows, Thinking in Systems: A Primer
       * [**!BONUS**] F. Hermans, The Programmer's Brain: What every programmer needs to know about cognition

5. Most Popular Libraries/Frameworks for Java:
     * Logging: [**SLF4J**](https://www.baeldung.com/slf4j-with-log4j2-logback) (Log4J2, Logback)
       * [**!OPINION**] [Why not use java.util.logging?](https://stackoverflow.com/questions/11359187/why-not-use-java-util-logging)
     * [Project Lombok](https://projectlombok.org/)
     * POJO-DTO Mapping: [**MapStruct**](https://mapstruct.org/)
     * JSON (De)serialization: [**Jackson**](https://www.baeldung.com/jackson)
     * [JAX-WS](https://www.baeldung.com/jax-ws) (**Axis2**, **Apache CXF**)
     * [JAX-RS](https://www.baeldung.com/jax-rs-spec-and-implementations) (**RESTEasy**, **Jersey**, **Apache CXF**)
     * API documentation: [**Swagger**](https://swagger.io/tools/open-source/open-source-integrations/)
     * Persistence:
         * [JPA (**Hibernate**)](https://www.baeldung.com/learn-jpa-hibernate) + [HQL/JPQL](https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/ch11.html):
           * Vlad Mihalcea, [blog](https://vladmihalcea.com/blog/) + *High-Performance Java Persistence*
     * Messaging:
       * JMS (**ActiveMQ**, **Rabbit**, **Kafka**)
     * Reactive Programming:
       * [**RxJava**](https://www.pluralsight.com/courses/reactive-programming-java-12-rxjava-2)
       * [**Mutiny**](https://smallrye.io/smallrye-mutiny/guides)
       * [**Vert.x**](https://vertx.io/docs/vertx-core/java/)
     * Test-Driven Development:
         * Unit/Integration Testing: [**JUnit 5**](https://www.baeldung.com/junit-5) + [**H2**](http://www.h2database.com/html/tutorial.html) + [**Mockito**](https://www.baeldung.com/mockito-series) + [**WireMock**](http://wiremock.org/docs/getting-started/) + [**RestAssured**](https://www.baeldung.com/rest-assured-tutorial) + [**Hamcrest**](http://hamcrest.org/JavaHamcrest/tutorial)
         * E2E Testing: [**Selenium**](https://www.selenium.dev/documentation/guidelines/)
     * File manipulation:
       * Excel: [**Apache POI**](https://www.baeldung.com/java-microsoft-excel)
       * PDF: [**iText/OpenPDF**](https://www.baeldung.com/java-pdf-creation)
     * Log Analytics: Splunk, ELK (Elastic Stack: ElasticSearch, Logstash, and Kibana)
     * Performance Testing: Apache JMeter, OpenTracing, Prometheus + Grafana
     * [Netflix OSS](https://www.baeldung.com/tag/netflix/): Service Discovery (**Eureka**), Circuit Breaker (**Hystrix**), Intelligent Routing (**Zuul**) and Client Side Load Balancing (**Ribbon**)
     * [Spring](https://spring.io/projects/):
         * C. Walls, Spring in Action
         * I. Cosmina, Pivotal Certified Professional Spring Developer Exam: A Study Guide
     * [Quarkus](https://quarkus.io/guides/):
       * E. Deandrea, Quarkus for Spring developers

6. HTTP-based RESTful APIs:
     * [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
     * [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
     * [Standards.REST](https://standards.rest/)
     * [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
     * [JSON In a Nutshell](https://medium.com/omarelgabrys-blog/json-in-a-nutshell-7d638dfea7cc)
     * [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)
     * Main alternatives to the REST architectural style:
       - [GraphQL](https://training.linuxfoundation.org/training/exploring-graphql-a-query-language-for-apis-lfs141/?utm_source=lftraining&utm_medium=twitter&utm_campaign=mooc)
       - gRPC
       - Falcor
     * Main alternatives to the HTTP/1.1 protocol:
       - [HTTP/2 and HTTP/3](https://medium.com/@sandeep4.verma/http-1-to-http-2-to-http-3-647e73df67a8)
       - [UDP](https://www.baeldung.com/udp-in-java)
       - Advanced Message Queuing Protocol (AMQP)
       - [WebSocket](https://www.baeldung.com/java-websockets)
       - [Unix Domain Socket](https://nipafx.dev/java-unix-domain-sockets/) (for inter-process communication on the same host)
     * [Inter-Process Communication in a Microservices Architecture](https://www.nginx.com/blog/building-microservices-inter-process-communication/)

7. Databases & SQL:
     * [**!BONUS**] [ByteScout SQL Trainer](https://app.bytescout.com/sql-trainer/index.html)
     * [Things I Wished More Developers Knew About Databases](https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78)
     * [Comparing database types: how database types evolved to meet different needs](https://www.prisma.io/dataguide/intro/comparing-database-types)
     * How Database Work: [FE](https://madushandhanushka.wordpress.com/2019/03/26/how-database-works-frontend-architecture/) & [BE](https://madushandhanushka.wordpress.com/2019/03/26/how-database-works-backend-architecture/)
     * [How does a relational database work](http://coding-geek.com/how-databases-work/)
     * A. Petrov, Database Internals: A Deep Dive Into How Distributed Data Systems Work
     * Common relational DBs:
       - Oracle Database
       - MySQL
       - Microsoft SQL Server
       - PostgreSQL
       - IBM Db2
       - SQLite
       - MariaDB
     * Non-Relational DBs (**NoSQL**) by types:
       * Wide column: Apache Cassandra
       * Document: [ElasticSearch](https://www.baeldung.com/elasticsearch-java), MongoDB
       * Key–value: Redis
       * Graph: Neo4J

8. Microservices & Distributed Systems:
     * [**!OPINION**] [Don’t start with microservices – monoliths are your friend](https://arnoldgalovics.com/microservices-in-production/)
     * [From Microservices to Distributed Systems: A Survival Guide for Java Devs](https://dzone.com/articles/from-microservices-to-distributed-systems-survival)
     * C. Richardson, [Microservices Patterns](https://microservices.io/) (2018)
     * W, J. Carnell, Spring Microservices in Action (2017)
     * R, Vitillo, Understanding Distributed Systems. What every developer should know about large distributed applications

9.  [Cloud Computing](https://howtodoinjava.com/cloud/java-cloud-development-introduction-and-tools) & [DevOps](https://opensource.com/article/19/4/devops-pipeline):
    * Containers and Orchestration:
       * [Learning Containers From The Bottom Up](https://iximiuz.com/en/posts/container-learning-path/)
       * [Docker](https://www.docker.com/get-started)
       * [Podman + Skopeo + Buildah](https://www.redhat.com/en/blog/say-hello-buildah-podman-and-skopeo)
       * Cluster Managers:
         * [Kubernetes](https://kube.academy/) + [Helm](https://helm.sh/docs/)
           * Common K8s distributions:
               * [RedHat Openshift](https://www.redhat.com/en/services/training/do288-red-hat-openshift-development-ii-containerizing-applications)
               * Rancher
               * VMware Tanzu
         * [Cloud Foundry](https://docs.cloudfoundry.org/buildpacks/java/index.html)
         * Apache Mesos
         * LXD
    * CI/CD Pipelines:
       * [Jenkins](https://www.edx.org/course/introduction-to-jenkins)
    * Cloud Platforms:
      * Amazon Web Services [(AWS)](https://adayinthelifeof.nl/2020/05/20/aws.html)
      * [Microsoft Azure](https://azure.microsoft.com/en-us/develop/java/)
      * Google Cloud Platform (GCP)
      * Heroku
    * G. Kim et al., The DevOps Handbook. How to Create World-Class Agility, Reliability, and Security in Technology Organizations
    * M. Eisele and N. Vinto, Modernizing Enterprise Java. A Concise Cloud Native Guide for Developers

10. UNIX Toolbox:
    * [Basic UNIX](https://matt.might.net/articles/basic-unix/)
    * [Bash](https://matt.might.net/articles/bash-by-example/)
    * [Text Manipulation with grep, sed and awk](https://matt.might.net/articles/sculpting-text/)
    * [vi Survival Guide](https://www.nuxified.org/vi_survival_guide/)
    * [**!BONUS**] [Learn Git Branching](https://learngitbranching.js.org/)
    * [curl](https://curl.haxx.se/docs/httpscripting.html)
    * [cron](https://opensource.com/article/17/11/how-use-cron-linux)
    * [regex](https://regexone.com/)
    * [**!BONUS**] [Vim Adventures](https://vim-adventures.com/)
    * [**!BONUS**] [The Unix Game](https://www.unixgame.io/unix50)
    * [**!BONUS**] [WSL as a Linux Development Environment on Windows](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-docker-tmux-and-vscode)

11. Security:
      * [API authentication and authorization](https://idratherbewriting.com/learnapidoc/docapis_more_about_authorization.html)
      * [HTTP Security Headers](https://nullsweep.com/http-security-headers-a-complete-guide/)
      * [Identity, Claims, & Tokens -- An OpenID Connect Primer](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1)
      * M. McDonald, *Web Security for Developers*
      * M. Zalewski, *Tangled Web. A Guide to Securing Modern Web Applications*
      * [JWT](https://jwt.io/)
      * [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)
      * [Practical Cryptography for Developers](https://cryptobook.nakov.com/)
      * [**!BONUS**] [Web Security Academy](https://portswigger.net/web-security) (n.b. this course is the updated version of the book *The Web Application Hacker's Handbook*)

12. Networking, Web & Browsers:
      * [What is a network?](https://study-ccna.com/what-is-a-network/)
      * [An Introduction to Networking Terminology, Interfaces, and Protocols](https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols)
      * [I. Grigorik, High Performance Browser Networking: What every web developer should know about networking and web performance](https://hpbn.co/)
      * [SRE books](https://sre.google/books/)
      * [Web technology for developers](https://developer.mozilla.org/en-US/docs/Web)
      * [**!BONUS**] [Web Browser Engineering](https://browser.engineering/)

13. Software Documentation:
      * [JavaDoc](https://www.baeldung.com/javadoc)
      * [Markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)

14. Development Management:
      * Agile/[Scrum](https://www.scrumguides.org/scrum-guide.html)
      * [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)
      * [Atlassian Tool Suite](https://datarespons.com/atlassian-suite-tools-for-every-team-and-more-agility-in-projects/)

15. Miscellanea:
      * [Unicode and Character Sets](https://www.joelonsoftware.com/2003/10/08the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
      * [java.util.Date](https://codeblog.jonskeet.uk/2017/04/23/all-about-java-util-date/)
      * [UTC is enough for everyone... right?](https://zachholman.com/talk/utc-is-enough-for-everyone-right)
      * [Software Licenses: Overview and Recommendations for Developers ](https://www.logicify.com/en/blog/software-licenses-overview-and-recommendations-for-use-in-development/)
      * [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
      * [The Twelve Factors](https://12factor.net/)
---
## Go beyond Java and Web Development

* Teach Yourself CS:
  * [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html)
  * [Teach Yourself Computer Science](https://teachyourselfcs.com/)
  * [Path to a free self-taught education in Computer Science!](https://github.com/ossu/computer-science)
* Read the Classics of CS:
  * G. J. Sussman & H. Abelson, Structure and Interpretation of Computer Programs (SICP)
  * R. Bryant, Computer Systems: A Programmer's Perspective (CS:APP3e)
  * N. Nisan and S. Schocken, The Elements of Computing Systems (nand2tetris)
  * A. Arpaci-Dusseau and R. Arpaci-Dusseau, Operating Systems: Three Easy Pieces
  * G.Snyder, E. Nemeth, B. Whaley, T. Hein, D. Mackin, UNIX and Linux System Administration Handbook
  * J. Ullman and J. Hopcroft, Introduction to Automata Theory, Languages, and Computations (Cinderella Book)
  * A. V. Aho, M. S. Lam, R. Sethi, and J. D. Ullman, Compilers: Principles, Techniques, and Tools (Dragon Book)
  * T. H. Cormen, C. E. Leiserson, R. L. Rivest, and C. Stein, Introduction to Algorithms (The Big Book)
  * B. Kernighan and D. Ritchie, The C Programming Language
  * D. Knuth, O. Patashnik, and R. Graham, Concrete Mathematics: A Foundation for Computer Science
  * C. Bishop, Pattern Recognition and Machine Learning
  * P. Norvig, Paradigms of Artificial Intelligence Programming
* (Re- or Self-) Learn Math:
  * [J. Kun, A Programmer’s Introduction to Mathematics](https://pimbook.org/)
  * [Mathematics for the adventurous self-learner](https://www.neilwithdata.com/mathematics-self-learner)
  * [3Blue1Brown](https://www.youtube.com/c/3blue1brown/videos)
  * [Khan Academy](https://www.khanacademy.org/math)
* Learn CS/FOSS History and Hacking/Cyberpunk Culture:
  * S. Broca, Utopie du logiciel libre. Du bricolage informatique à la réinvention sociale ([Utopia del Software Libero](https://www.mimesisedizioni.it/libro/9788857547046), Mimesis - 2018)
  * E. S. Raymond, The Cathedral & the Bazaar
  * B. Kernighan, UNIX: A History and a Memoir
  * S. Williams, Free as in Freedom: Richard Stallman's Crusade for Free Software
  * L. Torvalds, Just for Fun
  * D. Knuth, Things a Computer Scientist Rarely Talks About
  * K. Hafner, Where wizards stay up late
  * M. Waldrop, The Dream Machine: J.C.R. Licklider and the Revolution That Made Computing Personal
  * J. Gleick, The Information: A History, a Theory, a Flood
  * D. R. Hofstadter, Gödel, Escher, Bach: an Eternal Golden Braid
  * T. Kidder, The Soul of a New Machine
  * D. Kushner, Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture
  * S. Levy, Hackers: Heroes of the Computer Revolution
  * K. Mitnick &s W. L. Simon, Ghost in the Wires: My Adventures as the World's Most Wanted Hacker
  * J. Erickson, Hacking: The Art of Exploitation
  * A. Huang, The Hardware Hacker: Adventures in Making and Breaking Hardware
  * A. Naitoh, How to the ThinkPad Changed the World ― and Is Shaping the Future
  * W. Gibson, Neuromancer
  * P. K. Dick, Do Androids Dream of Electric Sheep?
  * M. Shirow, The Ghost in the Shell
  * K. Otomo, Akira
* Follow Good (B|V)logs
  * [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA)
  * [Hacker News](https://news.ycombinator.com/)
  * [The Pragmatic Engineer](https://blog.pragmaticengineer.com/)
  * [Vicki Boykis](http://veekaybee.github.io/)
  * [Julia Evans](https://jvns.ca/)
* Learn New Programming Languages:
  * [GO](https://tour.golang.org/list)
  * [Rust](https://www.rust-lang.org/learn)
  * [Julia](https://julialang.org/learning/)
* Go Closer to the Metal:
  * [Microsoldering 101](https://www.youtube.com/watch?v=xFqA9u6y0Fk&list=PL4INaL5vWobD_CltiZXr7K46oJ33KvwBt)
  * [Ben Eater](https://eater.net/)
  * [Sam Zeloof](http://sam.zeloof.xyz/)
* Prepare yourself for Coding Interviews:
  * [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)

[^1]: It's hard to choose a specific course since there's plenty of training material available on the [web](https://dev.to/javinpaul/8-best-online-java-courses-to-learn-programming-in-2021-4clb), so just pick one and make sure that you really understand the topics mentioned below. If in doubt, try with the [video lectures](https://cuvids.io/app/video/1/watch/) of the book [Computer Science: An Interdisciplinary Approach](https://introcs.cs.princeton.edu/java/home/) by K. Wayne and R. Sedgewick.
