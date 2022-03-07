## Useful links and resources for newbies in Java to learn the technology stack commonly used for backend web development

1. [Web Developer RoadMap](https://github.com/kamranahmedse/developer-roadmap)

2. Java:
     1. Programming Language Fundamentals[^1]:
        1. JRE, JDK & JVM
        2. Byte Code vs. Machine Code
        3. Compiling with `javac` and Running with Arguments from CLI
        4. IDE[^2]
           1. [**!OPINION**] [Stop Making Students Use Eclipse](https://nora.codes/post/stop-making-students-use-eclipse/)
           2. [VSCode](https://code.visualstudio.com/docs/languages/java)
           3. [Debugging](https://code.visualstudio.com/docs/java/java-debugging)
        5. Heap & Stack
        6. Variables
        7. Arithmetic & Boolean Expressions
        8.  Built-in Types of Data
           1. Default Initialization
           2. Wrappers & Autoboxing
        9.  Arrays
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
     2. Build Automation Tools:
           1. [Ant vs Maven vs Gradle](https://www.baeldung.com/ant-maven-gradle)
           2. [**!OPINION**] [Why I Moved Back from Gradle to Maven](https://phauer.com/2018/moving-back-from-gradle-to-maven/)
     3. Scripting: JShell, [JBang](https://github.com/maxandersen/jbang)
     4. C. S. Horstmann, Core Java Fundementals (Vol. 1 & 2)
     5. J. Bloch, Effective Java
     6. Design Patterns:
        * [Java Design Patterns](https://java-design-patterns.com/)
        * [Modern Java EE design patterns](https://www.oreilly.com/content/modern-java-ee-design-patterns/)
     7. Unit Testing:
        1. [Modern Best Practices for Testing in Java](https://phauer.com/2019/modern-best-practices-testing-java/)
        2. [Combining Object Mother and Fluent Builder for the Ultimate Test Data Factory](https://reflectoring.io/objectmother-fluent-builder/)
        3. L. Kosleka, Effective Unit Testing
        4. P. Tahchiev, JUnit in Action
        5. L. Kosleka, Test Driven: TDD and Acceptance TDD for Java Developers
     8. Advanced Topics:
         1. Generics
         2. Reflection
         3. Concurrency, Multi-threading, Parallelism, Asynchronus & Reactive Programming:
             * [Applying Concurrency and Multi-threading to Common Java Patterns](https://www.pluralsight.com/courses/java-patterns-concurrency-multi-threading)
             * [Advanced Java Concurrent Patterns](https://www.pluralsight.com/courses/java-concurrent-patterns-advanced)
             * [Java Fundamentals: Asynchronous Programming Using CompletionStage](https://www.pluralsight.com/courses/java-fundamentals-asynchronous-programming-completionstage)
             * [The Essence of Reactive Programming in Java](https://www.scnsoft.com/blog/java-reactive-programming)
             * [5 Things to Know About Reactive Programming](https://developers.redhat.com/blog/2017/06/30/5-things-to-know-about-reactive-programming)
             * [The Difference Between a Reactive Non-Blocking Model and Classic Asynchronous Code](https://nickolasfisher.com/blog/The-Difference-Between-a-Reactive-NonBlocking-Model-and-Classic-Asynchronous-Code)
             * [EventLoop vs Thread per Request Model](https://singhkaushal.medium.com/spring-webflux-eventloop-vs-thread-per-request-model-a42d07ee8502)
             * [**!WIP**] [Project Loom](https://cr.openjdk.java.net/~rpressler/loom/Loom-Proposal.html)
         4. [New language features since Java 8 to 17](https://advancedweb.hu/new-language-features-since-java-8-to-17/)

3. Algorithms & Data Structures:
     1. [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
     2. R. Sedgewick & K. Wayne, Algorithms [1](https://www.coursera.org/learn/algorithms-part1) + [2](https://www.coursera.org/learn/algorithms-part2)
     3. D. Kopec, Classic Computer Science Problems in Java
     4. [Open Data Structures (in Java)](http://opendatastructures.org/ods-java/)
     5. [**!OPINION**] [Data Structures & Algorithms I Used Working at Tech Companies](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/)

4. Software Design:
     * J. Ousterhout, A Philosophy of Software Design
     * R. C. Martin, Clean Code
     * A. Hunt & D. Thomas, The Pragmatic Programmer: From Journeyman to Master
     * F. Brooks, The Mythical Man-Month
     * M. Fowler, Patterns of Enterprise Application Architecture
     * GoF, Design Patterns: Elements of Reusable Object-Oriented Software
     * R. C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship
     * K Beck & M. Fowler, Refactoring: Improving the Design of Existing Code
     * T. Winters et al., Software Engineering at Google: Lessons Learned from Programming Over Time
     * [**!BONUS**] D. Norman, [*The Design of Everyday Things*](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)
     * [**!BONUS**] C. Alexander et al., [The Timeless Way of Building](https://en.wikipedia.org/wiki/The_Timeless_Way_of_Building) + [*A Pattern Language: Towns, Buildings Construction*](https://en.wikipedia.org/wiki/A_Pattern_Language)
     * [**!BONUS**] D. H. Meadows, Thinking in Systems: A Primer
     * [**!BONUS**] F. Hermans, The Programmer's Brain: What every programmer needs to know about cognition

5. Most Popular Libraries/Frameworks for Java:
     * Logging: [**SLF4J**](https://www.baeldung.com/slf4j-with-log4j2-logback) (Log4J2, Logback)
       * [**!OPINION**] [Why not use java.util.logging?](https://stackoverflow.com/questions/11359187/why-not-use-java-util-logging)
       * [Mapped Diagnostic Context (MDC)](https://www.baeldung.com/mdc-in-log4j-2-logback)
     * Boilerplate Code Auto-generation: [Project Lombok](https://projectlombok.org/)
     * POJO-DTO Mapping: [**MapStruct**](https://mapstruct.org/)
     * Bean Validation: [Hibernate Validator](https://hibernate.org/validator/documentation/getting-started/)
     * Data Serialization:
         * Java Serialization (Native APIs)
           * [**!OPINION**] [Why Java's serialization slower than 3rd party APIs?](https://stackoverflow.com/questions/19447623/why-javas-serialization-slower-than-3rd-party-apis)
         * Language-agnostic Formats:
           * XML:
             * Java Architecture for XML Binding (JAXB)
           * JSON:
             * [**Jackson**](https://www.baeldung.com/jackson)
               * [Turbo-charging Jackson](https://github.com/FasterXML/jackson-docs/wiki/Presentation:-Jackson-Performance)
             * Gson
             * JSON-P & JSON-B
           * YAML:
             * YAML Beans
             * SnakeYAML
           * [Schema-based Binary Format](https://martin.kleppmann.com/2012/12/05/schema-evolution-in-avro-protocol-buffers-thrift.html):
             * [**Protocol Buffers**](https://developers.google.com/protocol-buffers/docs/javatutorial) (protobuf)
             * [**Apache Thrift**](https://thrift.apache.org/tutorial/java.html)
             * [**Apache Avro**](https://avro.apache.org/docs/current/gettingstartedjava.html)
     * [JAX-WS](https://www.baeldung.com/jax-ws) (**Axis2**, **Apache CXF**)
     * [JAX-RS](https://www.baeldung.com/jax-rs-spec-and-implementations) (**RESTEasy**, **Jersey**, **Apache CXF**)
     * [Jakarta EE](https://www.baeldung.com/java-enterprise-evolution) (Apache Tomcat, Jetty, WebSphere, WildFly, GlassFish, JBoss EAP, Open Liberty)
       * [Difference between an application server and a servlet container?](https://stackoverflow.com/questions/5039354/difference-between-an-application-server-and-a-servlet-container)
       * [**!OPINION**] [Why Kubernetes is The New Application Server](https://developers.redhat.com/blog/2018/06/28/why-kubernetes-is-the-new-application-server#)
     * API documentation: [**Swagger**](https://swagger.io/tools/open-source/open-source-integrations/)
     * Persistence:
         * [JDBC](https://www.baeldung.com/jpa-vs-jdbc)
         * JPA
           * [Hibernate](https://www.baeldung.com/learn-jpa-hibernate)
             * [HQL/JPQL](https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/ch11.html)
             * Vlad Mihalcea, [blog](https://vladmihalcea.com/blog/) + [High-Performance Java Persistence](https://vladmihalcea.com/books/high-performance-java-persistence/)
             * [Hibernate Performance Tuning Tips](https://thorben-janssen.com/tips-to-boost-your-hibernate-performance/?utm_source=social&utm_medium=twitter&utm_campaign=tutorial)
           * EclipseLink
           * Apache OpenJPA
     * [Cache Providers](https://blog.frankel.ch/choose-cache/2/): Caffeine, Ehcache, Infinispan, Hazelcast, Redis, Apache Ignite
     * Message Processing:
       * JMS (**Apache ActiveMQ**, **RabbitMQ**)
     * Event Streaming:
       * **Apache Kafka**
     * Reactive Programming:
       * [**RxJava**](https://www.pluralsight.com/courses/reactive-programming-java-12-rxjava-2)
       * [**Mutiny**](https://smallrye.io/smallrye-mutiny/guides)
       * [**Eclipse Vert.x**](https://vertx.io/docs/vertx-core/java/)
       * [**Netty**](https://medium.com/geekculture/a-tour-of-netty-5020ecee5494)
     * Test-Driven Development:
         * Unit/Integration Testing:
           * [**JUnit 5**](https://www.baeldung.com/junit-5)
           * [**Mockito**](https://www.baeldung.com/mockito-series)
           * [**Hamcrest**](http://hamcrest.org/JavaHamcrest/tutorial)
         * Integration Testing:
           * [**H2**](http://www.h2database.com/html/tutorial.html)
           * [**WireMock**](http://wiremock.org/docs/getting-started/)
           * [**RestAssured**](https://www.baeldung.com/rest-assured-tutorial)
           * [**Testcontainers**](https://www.testcontainers.org/)
         * E2E Testing:
           * [**Selenium**](https://www.selenium.dev/documentation/guidelines/)
     * File Manipulation:
       * Excel: [**Apache POI**](https://www.baeldung.com/java-microsoft-excel)
       * PDF: [**iText/OpenPDF**](https://www.baeldung.com/java-pdf-creation)
     * Log Analytics: Splunk, Elastic Stack (or **ELK**, i.e. ElasticSearch + Logstash + Kibana)
     * Performance Testing: Apache JMeter, OpenTracing, Prometheus + Grafana
     * Thread & Memory Monitoring:
       * [How to Get the Number of Threads in a Java Process](https://www.baeldung.com/java-get-number-of-threads)
       * [JConsole](https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html)
       * [Monitoring Java applications: Memory usage, threads and other JRE metrics](https://sysdig.com/blog/monitoring-java-jre/)
     * Workflow Engines: jBPM, Activiti, Flowable, COPPER, nFlow
     * Cloud Patterns:
       * [Netflix OSS](https://www.baeldung.com/tag/netflix/): **Eureka** (Service Discovery), **Hystrix** (Circuit Breaker), **Zuul** (Routing), **Ribbon** (Load Balancing)
      * [Cloud Functions](https://developers.googleblog.com/2020/05/java-11-for-cloud-functions.html)
     * [Dependency Injection](https://dzone.com/articles/dependency-injection-implementation-in-core-java-1):
       * [Spring](https://spring.io/projects/):
           * C. Walls, Spring in Action
           * I. Cosmina, Pivotal Certified Professional Spring Developer Exam: A Study Guide
       * [CDI](https://www.baeldung.com/java-ee-cdi):
         * [Quarkus](https://quarkus.io/guides/):
           * [Massive performance without headaches](https://quarkus.io/blog/resteasy-reactive-faq/)
           * [Quarkus Reactive Architecture](https://quarkus.io/version/2.2/guides/quarkus-reactive-architecture)
           * [Context Propagation in Quarkus](https://quarkus.io/version/2.2/guides/context-propagation)
           * [Overview of Bean Scopes in Quarkus](https://marcelkliemannel.com/articles/2021/overview-of-bean-scopes-in-quarkus/)
           * E. Deandrea, Quarkus for Spring developers

6. Inter-Process Communication (IPC):
     * [Inter-Process Communication in a Microservices Architecture](https://www.nginx.com/blog/building-microservices-inter-process-communication/)
     * Approaches:
       * Legacy Technologies:
         * Simple Object Access Protocol (SOAP)
         * Remote Method Invocation (RMI)
         * Common Object Request Broker Architecture (CORBA)
       * Synchronous Communication:
         * Representational state transfer (REST):
           * [**!OPINION**] [Roy Fielding's Misappropriated REST Dissertation](https://twobithistory.org/2020/06/28/rest.html)
           * [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
           * [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
           * [Standards.REST](https://standards.rest/)
           * [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
           * [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)
         * [GraphQL](https://training.linuxfoundation.org/training/exploring-graphql-a-query-language-for-apis-lfs141/?utm_source=lftraining&utm_medium=twitter&utm_campaign=mooc)
         * [gRPC](../luoghi/cibo/veneto.csv)
         * [Falcor](https://netflix.github.io/falcor/starter/what-is-falcor.html)
       * Asynchronous Communication:
         * Message Queues
         * Publish–Subscribe Pattern
     * Protocols:
       - Sockets:
         - Network Sockets:
           - TCP
             - [HTTP/1.1, HTTP/2 and HTTP/3](https://medium.com/@sandeep4.verma/http-1-to-http-2-to-http-3-647e73df67a8)
             - [WebSocket](https://www.baeldung.com/java-websockets)
           - [UDP](https://www.baeldung.com/udp-in-java)
         - [Unix Domain Sockets](https://nipafx.dev/java-unix-domain-sockets/)
       - Messaging:
         - AMQP
         - MQTT
         - STOMP

7. Databases & SQL:
     * [**!BONUS**] [ByteScout SQL Trainer](https://app.bytescout.com/sql-trainer/index.html)
     * Basic Concepts:
       * [Database Normalization Basics](https://www.lifewire.com/database-normalization-basics-1019735)
       * [Database Indexes Explained](https://www.essentialsql.com/what-is-a-database-index/)
       * [Table Compression and Partitioning](https://docs.oracle.com/en/database/oracle/oracle-database/21/vldbg/partition-table-compression.html#GUID-F26AFD78-DC1D-4E6B-9B37-375C59FD1787)
     * [Things I Wished More Developers Knew About Databases](https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78)
     * [Comparing database types: how database types evolved to meet different needs](https://www.prisma.io/dataguide/intro/comparing-database-types)
     * Database Internals:
       * How Database Work: [FE](https://madushandhanushka.wordpress.com/2019/03/26/how-database-works-frontend-architecture/) & [BE](https://madushandhanushka.wordpress.com/2019/03/26/how-database-works-backend-architecture/)
       * [How does a relational database work](http://coding-geek.com/how-databases-work/)
       * A. Petrov, Database Internals: A Deep Dive Into How Distributed Data Systems Work
     * Common Relational DBs:
       - Oracle Database
       - MySQL
       - Microsoft SQL Server
       - PostgreSQL
       - IBM Db2
       - SQLite
       - MariaDB
     * Non-Relational DBs (**NoSQL**) by Types:
       * Wide column: Apache Cassandra
       * Document: [ElasticSearch](https://www.baeldung.com/elasticsearch-java), MongoDB
       * Key–value: Redis
       * Graph: Neo4J
     * Version control tools: [Liquibase](https://liquibase.org/get-started/quickstart)

8. Microservices, Distributed Systems & System Design:
     * [**!OPINION**] [Don’t start with microservices – monoliths are your friend](https://arnoldgalovics.com/microservices-in-production/)
     * [From Microservices to Distributed Systems: A Survival Guide for Java Devs](https://dzone.com/articles/from-microservices-to-distributed-systems-survival)
     * [Microservices Patterns](https://microservices.io/patterns/index.html)
     * R. Vitillo, Understanding Distributed Systems. What every developer should know about large distributed applications
     * S. Newman, Building Microservices (2nd ed.)
     * M. Kleppmann, [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
     * D. Martin, [The System Design Primer](https://github.com/donnemartin/system-design-primer)
     * [The Twelve Factors](https://12factor.net/)
     * [The Reactive Principles. Design Principles for Distributed Applications](https://principles.reactive.foundation/)
     * [Testing Distributed Systems](https://asatarin.github.io/testing-distributed-systems/)

9.  [Cloud Computing](https://howtodoinjava.com/cloud/java-cloud-development-introduction-and-tools) & [DevOps](https://opensource.com/article/19/4/devops-pipeline):
    * [Cloud Application Platform vs Container as a Service vs VM hosted application](https://www.suse.com/c/cap-vs-caas-vs-vm-hosted-application/)
    * Containers and Orchestration:
       * [What is a container image?](https://opensource.com/article/21/8/container-image)
       * [A Practical Introduction to Container Terminology](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction#)
       * [Learning Containers From The Bottom Up](https://iximiuz.com/en/posts/container-learning-path/)
       * [Docker](https://www.docker.com/get-started)
       * [Podman + Skopeo + Buildah](https://www.redhat.com/en/blog/say-hello-buildah-podman-and-skopeo)
       * Cluster Managers:
         * [Kubernetes](https://kube.academy/) + [Helm](https://helm.sh/docs/)
           * Common K8s distributions:
               * [RedHat Openshift](https://www.redhat.com/en/services/training/do288-red-hat-openshift-development-ii-containerizing-applications)
               * Rancher
               * VMware Tanzu
               * Google Kubernetes Engine (GKE)
         * [Cloud Foundry](https://docs.cloudfoundry.org/buildpacks/java/index.html)
         * Apache Mesos
         * LXD
    * CI/CD Pipelines:
       * [Jenkins](https://www.edx.org/course/introduction-to-jenkins)
       * [A developer's guide to CI/CD and GitOps with Jenkins Pipelines](https://developers.redhat.com/articles/2022/01/13/developers-guide-cicd-and-gitops-jenkins-pipelines#)
    * Cloud Platforms:
      * Amazon Web Services [(AWS)](https://adayinthelifeof.nl/2020/05/20/aws.html)
      * [Microsoft Azure](https://azure.microsoft.com/en-us/develop/java/)
      * Google Cloud Platform (GCP)
      * Heroku
    * G. Kim et al., The DevOps Handbook. How to Create World-Class Agility, Reliability, and Security in Technology Organizations
    * M. Eisele and N. Vinto, Modernizing Enterprise Java. A Concise Cloud Native Guide for Developers

10. [UNIX](https://github.com/sirredbeard/Awesome-UNIX) Toolbox:
    * [Survival guide for Unix newbies ](https://matt.might.net/articles/basic-unix/)
    * [Shell programming with bash: by example, by counter-example](https://matt.might.net/articles/bash-by-example/)
    * [Sculpting text with regex, grep, sed, awk, emacs and vim](https://matt.might.net/articles/sculpting-text/)
    * [vi Survival Guide](https://www.nuxified.org/vi_survival_guide/)
    * [**!BONUS**] [Learn Git Branching](https://learngitbranching.js.org/)
    * [The Art Of Scripting HTTP Requests Using Curl](https://curl.haxx.se/docs/httpscripting.html)
    * [How I use cron in Linux](https://opensource.com/article/17/11/how-use-cron-linux)
    * [RegexOne. Learn Regular Expressions with simple, interactive exercises](https://regexone.com/)
    * [**!BONUS**] [Vim Adventures](https://vim-adventures.com/)
    * [**!BONUS**] [The Unix Game](https://www.unixgame.io/unix50)
    * [**!BONUS**] [WSL as a Linux Development Environment on Windows](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-docker-tmux-and-vscode)

11. Security:
      * [API authentication and authorization](https://idratherbewriting.com/learnapidoc/docapis_more_about_authorization.html)
      * [HTTP Security Headers](https://nullsweep.com/http-security-headers-a-complete-guide/)
      * Identity, Claims, & Tokens. An OpenID Connect Primer: [1](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1), [2](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-2), [3](https://developer.okta.com/blog/2017/08/01/oidc-primer-part-3)
      * [JWT](https://jwt.io/)
      * M. McDonald, *Web Security for Developers*
      * M. Zalewski, *Tangled Web. A Guide to Securing Modern Web Applications*
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
      * [**!BONUS**] [HTTP Toolkit](https://httptoolkit.tech/)

13. Software Documentation:
      * [How to Write Doc Comments for the Javadoc Tool](https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html)
      * [**!OPINION**] [The Ins and Outs of Using Markdown for Technical Writing](https://document360.com/blog/markdown-for-technical-writing/)
      * [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)
      * [Documenting APIs: A guide for technical writers and engineers](https://idratherbewriting.com/learnapidoc/)

14. Development Team Organization:
      * Agile/[Scrum](https://www.scrumguides.org/scrum-guide.html)
      * [Famous laws of Software Development](https://www.timsommer.be/famous-laws-of-software-development/)
      * [Atlassian Tool Suite](https://datarespons.com/atlassian-suite-tools-for-every-team-and-more-agility-in-projects/)

15. Miscellanea:
      * [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
      * [All About java.util.Date](https://codeblog.jonskeet.uk/2017/04/23/all-about-java-util-date/)
      * [UTC is enough for everyone... right?](https://zachholman.com/talk/utc-is-enough-for-everyone-right)
      * [How to Find or Validate an Email Address](https://www.regular-expressions.info/email.html)
      * [Software Licenses: Overview and Recommendations for Developers ](https://www.logicify.com/en/blog/software-licenses-overview-and-recommendations-for-use-in-development/)
      * [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
      * [To www or not to www – Should you use www or not in your domain?](https://www.bjornjohansen.com/www-or-not)
      * [Developers don't understand CORS](https://fosterelli.co/developers-dont-understand-cors)
      * [You don't need that CORS request](https://nickolinger.com/blog/2021-08-04-you-dont-need-that-cors-request/)
      * [Understanding "same-site" and "same-origin"](https://web.dev/same-site-same-origin/)
      * [Technology Radar. An opinionated guide to technology frontiers](https://www.thoughtworks.com/radar)
      * [The HTTP QUERY Method](https://www.ietf.org/id/draft-ietf-httpbis-safe-method-w-body-02.html)
---
## Go beyond Java and Web Development

* Teaching Yourself CS:
  * [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html)
  * [Teach Yourself Computer Science](https://teachyourselfcs.com/)
  * [Path to a free self-taught education in Computer Science!](https://github.com/ossu/computer-science)
* Classics of CS:
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
* Math:
  * [J. Kun, A Programmer’s Introduction to Mathematics](https://pimbook.org/)
  * [Mathematics for the adventurous self-learner](https://www.neilwithdata.com/mathematics-self-learner)
  * [3Blue1Brown](https://www.youtube.com/c/3blue1brown/videos)
  * [Khan Academy](https://www.khanacademy.org/math)
* CS/FOSS History and Hacking/Cyberpunk Culture:
  * S. Broca, Utopie du logiciel libre. Du bricolage informatique à la réinvention sociale (cfr. italian version, [Utopia del Software Libero](https://www.mimesisedizioni.it/libro/9788857547046))
  * E. S. Raymond, The Cathedral & the Bazaar
  * B. Kernighan, UNIX: A History and a Memoir
  * S. Williams, Free as in Freedom: Richard Stallman's Crusade for Free Software
  * L. Torvalds, Just for Fun
  * D. Knuth, Things a Computer Scientist Rarely Talks About
  * K. Hafner, Where wizards stay up late
  * M. Waldrop, The Dream Machine: J.C.R. Licklider and the Revolution That Made Computing Personal
  * [The History of the Graphical User Interface - 1945 to 1980](https://lunduke.substack.com/p/the-history-of-the-graphical-user)
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
* Blogs, Forums, YT Channels, Newsletters
  * [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA)
  * [Hacker News](https://news.ycombinator.com/)
  * [The Pragmatic Engineer](https://blog.pragmaticengineer.com/)
  * [Vicki Boykis](http://veekaybee.github.io/)
  * [Julia Evans](https://jvns.ca/)
  * [Ivan Velichko](https://iximiuz.com/en/)
  * [Box of Cables](https://boxofcables.dev/)
  * [JDeploy](https://jdeploy.substack.com/archive)
  * [Baeldung Weekly Review](https://www.baeldung.com/category/weekly-review/)
* New Programming Languages:
  * [GO](https://tour.golang.org/list)
  * [Rust](https://www.rust-lang.org/learn)
  * [Julia](https://julialang.org/learning/)
* Getting Closer to the Metal:
  * [Microsoldering 101](https://www.youtube.com/watch?v=xFqA9u6y0Fk&list=PL4INaL5vWobD_CltiZXr7K46oJ33KvwBt)
  * [Ben Eater](https://eater.net/)
  * [Sam Zeloof](http://sam.zeloof.xyz/)
* Career Advice:
  * R. Kanna, [Job Hunting Resources for Developers](https://randallkanna.com/get-the-ultimate-list/)
  * [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)

[^1]: It's hard to choose a specific course since there's plenty of training material available on the [web](https://dev.to/javinpaul/8-best-online-java-courses-to-learn-programming-in-2021-4clb), so just pick one and make sure that you really understand the topics mentioned below. If in doubt, try with the video lectures ([1](https://www.coursera.org/learn/cs-programming-java) + [2](https://www.coursera.org/learn/cs-algorithms-theory-machines)) of the book [Computer Science: An Interdisciplinary Approach](https://introcs.cs.princeton.edu/java/home/) by K. Wayne and R. Sedgewick.

[^2]: There's a number of [IDEs](https://www.tutorialworks.com/java-ide/) available for Java in this day and age, but my personal preference goes to Visual Studio Code as the ideal programming environment for polyglot developers: just to mention some features, VSCode allows you to [open a remote folder on any remote machine, virtual machine, or container with a running SSH server](https://code.visualstudio.com/docs/remote/ssh) (also integrating nicely with [WSL](https://code.visualstudio.com/docs/remote/wsl)), [visualize data structures](https://addyosmani.com/blog/visualize-data-structures-vscode/) while debugging and can run in a lightweight version in a [web browser](https://vscode.dev/) without installing anything.
