  # Java back-end web development

  Just a raw list, based on my personal (and limited) experience, meant to offer to the adventurous learner a map to orient him/herself and a roughly sketched  learning path to get into back-end (or server-side) programming for the web in Java: it tries to mention the most relevant **concepts** and **tools** a newbie can encounter in his/her work routine as a developer[^1][^2]. The last sections goes well beyond Java, which is just the typical entry-point programming language for many people in enterprise software development.

  Below you can find a visual summary of the main topics mentioned in this list:
  ```mermaid
  stateDiagram-v2
      [*] --> Java
      Java --> Maven
      Maven --> Libs

      Java --> Design_Patterns
      Design_Patterns --> Software_Design
      Software_Design --> System_Design
      Java --> Git
      Git --> Bash
      Bash --> Vim
      Vim --> Linux
      Linux --> Containers
      Containers --> Docker/Podman
      Docker/Podman --> Kubernetes
      Linux --> Computer_Systems

      Java --> Data_Structures
      Data_Structures --> Algorithms

      Java --> SQL
      SQL --> Databases

      Java --> IPC
      IPC --> REST

      IPC --> RPC
      IPC --> GraphQL
      IPC --> Networks
      Networks --> Web
      Web --> Security
  ```

  Altough the list is very dense (and even lacking proper structure of information), one must keep in mind that the focus of learning to code should always be on learning abstract concepts and their low-level implementation details which underlie the tech stack used in modern programming, rather than specific and ephemeral tools (e.g. libraries, frameworks, etc.):
  > Modern programming is becoming complex, uninteresting, full of layers that just need to be glued. It is losing most of its beauty. In that sense, most programming is no longer art nor high engineering (most programs written at big and small corporations are trivial: coders just need to understand certain ad-hoc abstractions, and write some logic and **glue code**). Only very few programmers are facing the artistic face of programming. Only very few programmers are facing high engineering in programming. 
  >> (Salvatore Sanfilippo, aka [antirez](http://invece.org/))

  In fact, an [application software](https://en.wikipedia.org/wiki/Application_software) usually consists of levels (or layers) of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Levels_of_abstraction), wherein each level represents a different model of the same information and processes, but with varying amounts of detail. Each relatively abstract, higher level builds on a relatively concrete, lower level, which tends to provide an increasingly granular representation.

  Abstractions are useful, but all non-trivial abstractions, to some degree, are [leaky](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/). So, blindly ignoring what happens at lower levels can cause performance issues or (worst) unintended bugs which are hard to debug (e.g. inscrutable [incidents](https://www.andrewdoss.dev/writing/timeouts/) in production). Solving such issues thanks to Q&A websites like Stack Overflow does not help learning what actually went wrong leaving a certain sense of frustration (a common feeling for [Linux](https://fabiensanglard.net/a_linux_evening/index.html) users).

  Unfortunately, the enterprise software world is largely dominated by the use of [frameworks](https://en.wikipedia.org/wiki/Software_framework) (e.g. Spring vs Quarkus on back-end side, Angular vs React on front-end side), an abstraction which is useful to avoid code bloat but limits the creative job of a programmer, making him just an expert user of a particular framework. These frameworks are also susceptible to be replaced by other competing frameworks, generically perceived as "innovative" for some reason. The only way to avoid to be forced to learn a framework every N years is to understand what happens behind the abstractions, which in turn means to get a good grasp of computer architecture investigating what happens at the hardware/software interface (*getting closer to the metal*, as they say).

  ---
  ## Java
  - [A Brief History of the Java Programming Language](https://www.baeldung.com/java-history)
  - Programming Language Fundamentals[^3]:
    - JRE, JDK & [JVM](https://shipilev.net/jvm/anatomy-quarks/)
    - Byte Code vs. Machine Code
        - [Java Bytecode Simplified: Journey to the Wonderland](https://foojay.io/today/java-bytecode-simplified-journey-to-the-wonderland-part-1/)
    - Compiling with `javac` and Running with Arguments from CLI
    - IDE[^4]
      - [**!OPINION**] [Stop Making Students Use Eclipse](https://nora.codes/post/stop-making-students-use-eclipse/)
      - [VSCode](https://code.visualstudio.com/docs/languages/java)
      - [Debugging](https://code.visualstudio.com/docs/java/java-debugging)
    - Heap & Stack
    - Variables
    - Arithmetic & Boolean Expressions
    -  Built-in Types of Data
      - Default Initialization
      - Wrappers & Autoboxing
    -  Arrays
    - The Object Class
        - `this` & `super` keywords
        - `equals()` & `hashCode()` methods
    - Constants & Enumerations
    - Access Modifiers
    - Classes & Object-Oriented Programming (OOP) Basic Concepts
        - Interfaces vs. Abstract Classes (Abstraction)
        - Nested Classes, Inner Classes & Anonymous Classes
        - Inheritance vs. Composition
        - Polymorphism & Upcasting vs. Downcasting
        - Encapsulation & Data Hiding
    - Control Flow Statements
    - Methods
        - Passing-by-Value vs. Passing-by-Reference
        - Overloading & Overriding
        - The `main` method
    - Exceptions
        - Throwable, Exception & Error
        - Checked vs. Unchecked
        - Try/Catch & Catch-or-Declare Requirement
    - Collections
        - Iterable & Iterator
        - Comparable & Comparator
        - Sorting & Searching
        - Stack & Queue
        - List, Set & Map
    - I/O
    - Streams
    - Lambda Expressions & Method References
    - Recursion
        -  [The Three Laws of Recursion](https://pages.di.unipi.it/marino/python/Recursion/TheThreeLawsofRecursion.html)
  - Build Automation Tools:
      - [Ant vs Maven vs Gradle](https://www.baeldung.com/ant-maven-gradle)
      - [**!OPINION**] [Why I Moved Back from Gradle to Maven](https://phauer.com/2018/moving-back-from-gradle-to-maven/)
  - Scripting: JShell, [JBang](https://github.com/maxandersen/jbang)
  - Horstmann, Core Java Fundementals (Vol. 1 & 2)
  - Bloch, Effective Java
  - [Design Patterns](https://java-design-patterns.com/)
  - Unit Testing:
    - Kosleka, Effective Unit Testing
    - Tahchiev, JUnit in Action
    - Kosleka, Test Driven: TDD and Acceptance TDD for Java Developers
  - Advanced Topics:
    - Generics
    - Reflection
    - Concurrency, Multi-threading, Parallelism and Asynchronus Programming:
        - [5 Things You Probably Didn't Know About Java Concurrency](https://foojay.io/today/5-things-you-probably-didnt-know-about-java-concurrency/?utm_content=202308183&utm_medium=social&utm_source=twitter&hss_channel=tw-2599580401)
        - [Applying Concurrency and Multi-threading to Common Java Patterns](https://www.pluralsight.com/courses/java-patterns-concurrency-multi-threading)
        - [Advanced Java Concurrent Patterns](https://www.pluralsight.com/courses/java-concurrent-patterns-advanced)
        - [Java Fundamentals: Asynchronous Programming Using CompletionStage](https://www.pluralsight.com/courses/java-fundamentals-asynchronous-programming-completionstage)
        - [**!WIP**] [Project Loom](https://openjdk.org/jeps/425)
          - [**!WARNING**] [Loom and Thread Fairness](https://www.morling.dev/blog/loom-and-thread-fairness/)
    - Reactive Programming
        - [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
        - [The Essence of Reactive Programming in Java](https://www.scnsoft.com/blog/java-reactive-programming)
        - [5 Things to Know About Reactive Programming](https://developers.redhat.com/blog/2017/06/30/5-things-to-know-about-reactive-programming)
        - [The Difference Between a Reactive Non-Blocking Model and Classic Asynchronous Code](https://nickolasfisher.com/blog/The-Difference-Between-a-Reactive-NonBlocking-Model-and-Classic-Asynchronous-Code)
        - [EventLoop vs Thread per Request Model](https://singhkaushal.medium.com/spring-webflux-eventloop-vs-thread-per-request-model-a42d07ee8502)
        - [Explaining event loop in 100 lines of code](https://iximiuz.com/en/posts/explain-event-loop-in-100-lines-of-code/)
  - Java APIs
    - [The Java Version Almanac](https://javaalmanac.io/)
    - [New language features since Java 8 to 17](https://advancedweb.hu/new-language-features-since-java-8-to-17/)

  ---

  ## Algorithms & Data Structures
  - [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
  - [Learn Data Structures and Algorithms](https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm)
  - Sedgewick & Wayne, Algorithms [1](https://www.coursera.org/learn/algorithms-part1) + [2](https://www.coursera.org/learn/algorithms-part2)
  - Kopec, Classic Computer Science Problems in Java
  - [Open Data Structures (in Java)](http://opendatastructures.org/ods-java/)
  - [**!OPINION**] [Data Structures & Algorithms I Used Working at Tech Companies](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/)
  - [**!BONUS**] [Visualizing Algorithms](https://bost.ocks.org/mike/algorithms/)
  - Patterns:
    - [Algorithmic Patterns](https://cs.lmu.edu/~ray/notes/algpatterns/)
    - [The Sliding Window Pattern](https://nan-archive.vercel.app/sliding-window)
    - [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)
    - [Grokking Coding Interview Patterns in Go](https://www.educative.io/courses/grokking-coding-interview-patterns-go)
  - [Deliberate Practice](https://en.wikipedia.org/wiki/Practice_(learning_method)#Deliberate_practice):
    - [exercism](https://exercism.org/)
    - [LeetCode](https://leetcode.com/)
    - [HackerRank](https://www.hackerrank.com/)
      - [data-structures](https://www.hackerrank.com/domains/data-structures)
      - [algorithms](https://www.hackerrank.com/domains/algorithms)

  ---

  ## Software Design
  - Ousterhout, A Philosophy of Software Design
  - Martin, Clean Code
  - Hunt & Thomas, The Pragmatic Programmer: From Journeyman to Master
  - Brooks, The Mythical Man-Month
  - Fowler, Patterns of Enterprise Application Architecture
  - GoF, Design Patterns: Elements of Reusable Object-Oriented Software
  - Martin, Clean Code: A Handbook of Agile Software Craftsmanship
  - Beck & Fowler, Refactoring: Improving the Design of Existing Code
  - Winters et al., Software Engineering at Google: Lessons Learned from Programming Over Time
  - [**!BONUS**] Norman, [*The Design of Everyday Things*](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things)
  - [**!BONUS**] Alexander et al., [The Timeless Way of Building](https://en.wikipedia.org/wiki/The_Timeless_Way_of_Building) + [*A Pattern Language: Towns, Buildings Construction*](https://en.wikipedia.org/wiki/A_Pattern_Language)
  - [**!BONUS**] Meadows, Thinking in Systems: A Primer
  - [**!BONUS**] Hermans, The Programmer's Brain: What every programmer needs to know about cognition

  ---

  ## Most Popular Libraries, Frameworks and Tools for Java
  - [**!BONUS**] [Technology Radar. An opinionated guide to technology frontiers](https://www.thoughtworks.com/radar)
  - [**!OPINION**] [Why not use java.util.logging?](https://stackoverflow.com/questions/11359187/why-not-use-java-util-logging)
  - [Mapped Diagnostic Context (MDC)](https://www.baeldung.com/mdc-in-log4j-2-logback)
  - Boilerplate Code Auto-generation: [Project Lombok](https://projectlombok.org/)
  - POJO-DTO Mapping: [**MapStruct**](https://mapstruct.org/)
  - Bean Validation: [Hibernate Validator](https://hibernate.org/validator/documentation/getting-started/)
  - Persistence:
    - [JDBC](https://www.baeldung.com/jpa-vs-jdbc)
    - JPA
      - [Hibernate](https://www.baeldung.com/learn-jpa-hibernate)
        - [HQL/JPQL](https://docs.jboss.org/hibernate/orm/-3/devguide/en-US/html/ch-html)
        - Vlad Mihalcea, [blog](https://vladmihalcea.com/blog/) + [High-Performance Java Persistence](https://vladmihalcea.com/books/high-performance-java-persistence/)
        - [Hibernate Performance Tuning Tips](https://thorben-janssen.com/tips-to-boost-your-hibernate-performance/?utm_source=social&utm_medium=twitter&utm_campaign=tutorial)
      - EclipseLink
      - Apache OpenJPA
  - [Cache Providers](https://blog.frankel.ch/choose-cache/2/): Caffeine, Ehcache, Infinispan, Hazelcast, Redis, Apache Ignite
  - Message Processing:
  - JMS (**Apache ActiveMQ**, **RabbitMQ**)
  - Event Streaming:
  - **Apache Kafka**
  - Data Serialization:
    - Java Serialization (Native APIs)
      - [**!OPINION**] [Why Java's serialization slower than 3rd party APIs?](https://stackoverflow.com/questions/19447623/why-javas-serialization-slower-than-3rd-party-apis)
    - Language-agnostic Formats:
      - XML:
        - Java Architecture for XML Binding (JAXB)
      - JSON:
        - [**Jackson**](https://www.baeldung.com/jackson)
          - [Turbo-charging Jackson](https://github.com/FasterXML/jackson-docs/wiki/Presentation:-Jackson-Performance)
        - Gson
        - JSON-P & JSON-B
      - YAML:
        - YAML Beans
        - SnakeYAML
      - [Schema-based Binary Format](https://martin.kleppmann.com/2012/12/05/schema-evolution-in-avro-protocol-buffers-thrift.html):
        - [**Protocol Buffers**](https://developers.google.com/protocol-buffers/docs/javatutorial) (protobuf)
        - [**Apache Thrift**](https://thrift.apache.org/tutorial/java.html)
        - [**Apache Avro**](https://avro.apache.org/docs/current/gettingstartedjava.html)
  - File Manipulation:
  - Microsoft Documents: [**Apache POI**](https://www.baeldung.com/java-microsoft-excel)
  - PDF: [**iText**](https://www.baeldung.com/java-pdf-creation)/[**OpenPDF**](https://github.com/LibrePDF/OpenPDF)
  - HTML: [**Mustache**](https://www.baeldung.com/mustache)
  - [JAX-WS](https://www.baeldung.com/jax-ws) (**Axis2**, **Apache CXF**)
  - [JAX-RS](https://www.baeldung.com/jax-rs-spec-and-implementations) (**RESTEasy**, **Jersey**, **Apache CXF**)
  - API documentation: [**Swagger**](https://swagger.io/tools/open-source/open-source-integrations/)
  - [JEE](https://www.baeldung.com/java-enterprise-evolution) (**Apache Tomcat**, **Jetty**, **WebSphere**, **WildFly**, **GlassFish**, **JBoss EAP**, **Open Liberty**):
  - [Modern Java EE design patterns](https://www.oreilly.com/content/modern-java-ee-design-patterns/)
  - [Difference between an application server and a servlet container?](https://stackoverflow.com/questions/5039354/difference-between-an-application-server-and-a-servlet-container)
  - [**!OPINION**] [Why Kubernetes is The New Application Server](https://developers.redhat.com/blog/2018/06/28/why-kubernetes-is-the-new-application-server#)
  - [Dependency Injection](https://dzone.com/articles/dependency-injection-implementation-in-core-java-1):
  - [Spring](https://spring.io/projects/):
      - Walls, Spring in Action
      - Cosmina, Pivotal Certified Professional Spring Developer Exam: A Study Guide
  - [CDI](https://www.baeldung.com/java-ee-cdi):
    - [Quarkus](https://quarkus.io/guides/):
      - [Massive performance without headaches](https://quarkus.io/blog/resteasy-reactive-faq/)
      - [Quarkus Reactive Architecture](https://quarkus.io/version/-2/guides/quarkus-reactive-architecture)
      - [Context Propagation in Quarkus](https://quarkus.io/version/-2/guides/context-propagation)
      - [Overview of Bean Scopes in Quarkus](https://marcelkliemannel.com/articles/2021/overview-of-bean-scopes-in-quarkus/)
      - Deandrea, Quarkus for Spring developers
  - Reactive Programming:
  - [**RxJava**](https://www.pluralsight.com/courses/reactive-programming-java-12-rxjava-2)
  - [**Mutiny**](https://smallrye.io/smallrye-mutiny/guides)
  - [**Eclipse Vert.x**](https://vertx.io/docs/vertx-core/java/)
  - [**Netty**](https://medium.com/geekculture/a-tour-of-netty-5020ecee5494)
  - Test-Driven Development:
    - Unit Testing:
      - [**JUnit 5**](https://www.baeldung.com/junit-5)
      - [**Mockito**](https://www.baeldung.com/mockito-series)
      - [**Hamcrest**](http://hamcrest.org/JavaHamcrest/tutorial)
    - Integration Testing:
      - [**H2**](http://www.h2database.com/html/tutorial.html)
      - [**WireMock**](http://wiremock.org/docs/getting-started/)
      - [**RestAssured**](https://www.baeldung.com/rest-assured-tutorial)
      - [**Testcontainers**](https://www.testcontainers.org/)
    - E2E Testing:
      - [**Selenium**](https://www.selenium.dev/documentation/guidelines/)
    - Fuzz Testing:
      - [Jazzer](https://www.code-intelligence.com/blog/fuzz-targets-jazzer)
    - Mutation Testing:
      - [Pitest](https://pitest.org/)
  - Observability: 
    - Logging: [**SLF4J**](https://www.baeldung.com/slf4j-with-log4j2-logback) (Log4J2, Logback)
      - Log Aggregation: Splunk, Elastic Stack (or **ELK**, i.e. ElasticSearch + Logstash + Kibana), Fluentd
    - Metrics: [Prometheus](https://prometheus.io/docs/tutorials/getting_started/) + Grafana
      - [Learning Prometheus and PromQL](https://iximiuz.com/en/series/learning-prometheus-and-promql/)
    - Tracing: OpenTelemetry (Jaeger)
      - [Deprecating OpenTracing](https://github.com/opentracing/specification/issues/163)
    - Performance: Apache JMeter
  - Thread and Memory Monitoring:
  - [How to Get the Number of Threads in a Java Process](https://www.baeldung.com/java-get-number-of-threads)
  - [JConsole](https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html)
  - [Monitoring Java applications: Memory usage, threads and other JRE metrics](https://sysdig.com/blog/monitoring-java-jre/)
  - Workflow Engines: jBPM, Activiti, Flowable, COPPER, nFlow
  - Cloud Patterns:
  - [Spring Cloud Netflix](https://spring.io/projects/spring-cloud-netflix):
    - Eureka (Service Discovery)
    - Hystrix (Circuit Breaker)
    - Zuul (Routing)
    - Ribbon (Load Balancing)
  - [Cloud Functions](https://developers.googleblog.com/2020/05/java-11-for-cloud-functions.html)
    - [Introduction to Serverless on Kubernetes](https://www.edx.org/course/introduction-to-serverless-on-kubernetes)
  - Kubernetes Operator Toolkit: Java Operator SDK ([JOSDK](https://javaoperatorsdk.io/))
  - [Native Build](https://developer.okta.com/blog/2021/06/18/native-java-framework-comparison)

  ---

  ## Software Licenses
  - [Software Licenses: Overview and Recommendations for Developers ](https://www.logicify.com/en/blog/software-licenses-overview-and-recommendations-for-use-in-development/)
  - [Software Licenses in Plain English](https://tldrlegal.com/)
  - [A Beginner's Guide to Open Source Software Development (LFD102)](https://training.linuxfoundation.org/training/beginners-guide-open-source-software-development/)

  ---

  ## Inter-Process Communication (IPC)
  - [Inter-Process Communication in a Microservices Architecture](https://www.nginx.com/blog/building-microservices-inter-process-communication/)
  - Approaches:
    - Legacy Technologies:
      - Simple Object Access Protocol (SOAP)
      - Remote Method Invocation (RMI)
      - Common Object Request Broker Architecture (CORBA)
    - Synchronous Communication:
      - Representational state transfer (REST)
      - [GraphQL](https://training.linuxfoundation.org/training/exploring-graphql-a-query-language-for-apis-lfs141/?utm_source=lftraining&utm_medium=twitter&utm_campaign=mooc)
      - [gRPC](../luoghi/cibo/veneto.csv)
      - [Falcor](https://netflix.github.io/falcor/starter/what-is-falcor.html)
    - Asynchronous Communication:
      - Message Queues
      - Publish-Subscribe Pattern
  - Protocols:
    - Sockets:
      - Network Sockets:
        - TCP
          - [HTTP/-1, HTTP/2 and HTTP/3](https://medium.com/@sandeep-verma/http-1-to-http-2-to-http-3-647e73df67a8)
          - [WebSocket](https://www.baeldung.com/java-websockets)
        - [UDP](https://www.baeldung.com/udp-in-java)
      - [Unix Domain Sockets](https://nipafx.dev/java-unix-domain-sockets/)
    - Messaging:
      - AMQP
      - MQTT
      - STOMP
  - [Gough et al., Mastering API Architecture](https://www.oreilly.com/library/view/mastering-api-architecture/9781492090625/)
  - [**!BONUS**] [Free Public APIs for Developers](https://rapidapi.com/collection/list-of-free-apis)
  - [Difference between SPI and API](https://stackoverflow.com/questions/2954372/difference-between-spi-and-api)

  ---

  ## Databases & SQL
  - [**!BONUS**] [ByteScout SQL Trainer](https://app.bytescout.com/sql-trainer/index.html)
  - [**!BONUS**] [Introduction to SQL](https://sqlbolt.com/)
  - Basic Concepts:
    - [Things You Should Know About Databases](https://architecturenotes.co/things-you-should-know-about-databases/)
    - [Database Normalization Basics](https://www.lifewire.com/database-normalization-basics-1019735)
    - [Database Indexes Explained](https://www.essentialsql.com/what-is-a-database-index/)
    - [Table Compression and Partitioning](https://docs.oracle.com/en/database/oracle/oracle-database/21/vldbg/partition-table-compression.html#GUID-F26AFD78-DC1D-4E6B-9B37-375C59FD1787)
    - [Things I Wished More Developers Knew About Databases](https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78)
    - [Comparing database types: how database types evolved to meet different needs](https://www.prisma.io/dataguide/intro/comparing-database-types)
  - Database Internals:
    - How Database Work: [FE](https://madushandhanushka.wordpress.com/2019/03/26/how-database-works-frontend-architecture/) & [BE](https://madushandhanushka.wordpress.com/2019/03/26/how-database-works-backend-architecture/)
    - [How does a relational database work](http://coding-geek.com/how-databases-work/)
    - Petrov, Database Internals: A Deep Dive Into How Distributed Data Systems Work
  - Common Relational DBs:
    - Oracle Database
    - MySQL
    - Microsoft SQL Server
    - PostgreSQL
    - IBM Db2
    - SQLite
    - MariaDB
  - Non-Relational DBs (**NoSQL**) by Type:
    - Wide column: Apache Cassandra
    - Document: [ElasticSearch](https://www.baeldung.com/elasticsearch-java), MongoDB
    - Key-value: [Redis](https://architecturenotes.co/redis/)
    - Graph: Neo4J
  - Version control tools:
    - [Liquibase](https://liquibase.org/get-started/quickstart)

  ---

  ## Microservices, Distributed Systems & System Design
  - [From Microservices to Distributed Systems: A Survival Guide for Java Devs](https://dzone.com/articles/from-microservices-to-distributed-systems-survival)
  - [Microservices Patterns](https://microservices.io/patterns/index.html)
  - Vitillo, Understanding Distributed Systems. What every developer should know about large distributed applications
  - Newman, Building Microservices (2nd ed.)
  - Kleppmann, [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
  - Martin, [The System Design Primer](https://github.com/donnemartin/system-design-primer)
  - [The Twelve Factors](https://12factor.net/)
  - [The Reactive Principles. Design Principles for Distributed Applications](https://principles.reactive.foundation/)
  - [Testing Distributed Systems](https://asatarin.github.io/testing-distributed-systems/)
  - [The System Design Template I Use](https://adityarohilla.com/2022/03/22/the-system-design-template-i-use/)
  - [The Architecture of Open Source Applications](https://aosabook.org/en/index.html)
  - [Architecture Playbook](https://nocomplexity.com/documents/arplaybook/introduction.html)

  ---

  ## Cloud Computing & DevOps
  - [Java Cloud Development Introduction and Tools](https://howtodoinjava.com/cloud/java-cloud-development-introduction-and-tools)
  - [A beginner's guide to building DevOps pipelines with open source tools](https://opensource.com/article/19/4/devops-pipeline)
  - [Cloud Application Platform vs Container as a Service vs VM hosted application](https://www.suse.com/c/cap-vs-caas-vs-vm-hosted-application/)
  - Containers and Orchestration:
  - [What is a container image?](https://opensource.com/article/21/8/container-image)
  - [Container image formats under the hood](https://snyk.io/blog/container-image-formats/)
  - [A Practical Introduction to Container Terminology](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction#)
  - [Learning Containers From The Bottom Up](https://iximiuz.com/en/posts/container-learning-path/)
  - [Containers are chroot with a Marketing Budget](https://earthly.dev/blog/chroot/)
  - [Docker](https://github.com/docker/labs/tree/master/developer-tools/java)
  - [Podman + Skopeo + Buildah](https://www.redhat.com/en/blog/say-hello-buildah-podman-and-skopeo)
  - Container/Cluster Managers:
    - [Kubernetes](https://kube.academy/) + [Helm](https://helm.sh/docs/)
      - [WebAssembly vs. Kubernetes](https://thenewstack.io/yes-webassembly-can-replace-kubernetes/)
      - Distributions:
          - Self-Managed (Local):
            - minikube
            - kind
            - Microk8s
            - CodeReady Containers (CRC) (a minimal OpenShift -x cluster)
            - Minishift (a minimal OpenShift -x cluster)
          - IoT & Edge Computing:
            - k3s
          - Self-Managed (On Premises/Hybrid)
            - [RedHat Openshift](https://www.redhat.com/en/services/training/do288-red-hat-openshift-development-ii-containerizing-applications)
            - Rancher
            - VMware Tanzu Kubernetes Grid (TKG)
          - Kubernetes-as-a-Service (On Cloud)
            - Google Kubernetes Engine (GKE)
            - Amazon Elastic Kubernetes Service (Amazon EKS)
            - Azure Container Service (AKS)
    - [Docker Swarm](https://docs.docker.com/engine/swarm/)
    - [Apache Mesos](https://mesos.apache.org/)
    - [LXD](https://linuxcontainers.org/lxd/)
    - [Cloud Foundry](https://docs.cloudfoundry.org/buildpacks/java/index.html)
    - [Nomad](https://www.nomadproject.io/)
  - CI/CD Pipelines:
    - [Jenkins](https://www.edx.org/course/introduction-to-jenkins)
    - [A developer's guide to CI/CD and GitOps with Jenkins Pipelines](https://developers.redhat.com/articles/2022/01/13/developers-guide-cicd-and-gitops-jenkins-pipelines#)
  - Cloud Platforms:
    - Amazon Web Services [(AWS)](https://adayinthelifeof.nl/2020/05/20/aws.html)
    - [Microsoft Azure](https://azure.microsoft.com/en-us/develop/java/)
    - Google Cloud Platform (GCP)
    - Heroku
  - Kim et al., The DevOps Handbook. How to Create World-Class Agility, Reliability, and Security in Technology Organizations
  - Eisele and Vinto, Modernizing Enterprise Java. A Concise Cloud Native Guide for Developers
  - [Introduction to Cloud Infrastructure Technologies](https://www.edx.org/course/introduction-to-cloud-infrastructure-technologies?utm_medium=partner-marketing&utm_source=social&utm_campaign=linuxfoundation&utm_content=twitter-lfs151)
  - [**!OPINION**] [The cloudy layers of modern-day programming](https://vickiboykis.com/2022/12/05/the-cloudy-layers-of-modern-day-programming/) 

  ---

  ## The UNIX Toolbox
  - [Introduction to Bash](https://cs.lmu.edu/~ray/notes/bash/)
  - [Survival guide for Unix newbies ](https://matt.might.net/articles/basic-unix/)
  - [Settling into Unix](https://matt.might.net/articles/settling-into-unix/)
  - [Shell programming with bash: by example, by counter-example](https://matt.might.net/articles/bash-by-example/)
  - [Sculpting text with regex, grep, sed, awk, emacs and vim](https://matt.might.net/articles/sculpting-text/)
  - [vi Survival Guide](https://www.nuxified.org/vi_survival_guide/)
  - [**!BONUS**] [Learn Git Branching](https://learngitbranching.js.org/)
  - [The Art Of Scripting HTTP Requests Using Curl](https://curl.haxx.se/docs/httpscripting.html)
  - [How I use cron in Linux](https://opensource.com/article/17/11/how-use-cron-linux)
  - [Getting started with tmux](https://ittavern.com/getting-started-with-tmux/)
  - [Tmux for mere mortals](https://zserge.com/posts/tmux/)
  - [RegexOne. Learn Regular Expressions with simple, interactive exercises](https://regexone.com/)
  - [Cosmopolitan Libc](https://justine.lol/cosmopolitan/functions.html)
  - [**!BONUS**] [Learn the ways of Linux-fu, for free](https://linuxjourney.com/)
  - [**!BONUS**] [Vim Adventures](https://vim-adventures.com/)
  - [**!BONUS**] [The Unix Game](https://www.unixgame.io/unix50)
  - [**!BONUS**] [WSL as a Linux Development Environment on Windows](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-docker-tmux-and-vscode)
  - [**!BONUS**] [Awesome UNIX®](https://github.com/sirredbeard/Awesome-UNIX)
  - Hausenblas, Learning Modern Linux. A Handbook for the Cloud Native Practitioner
  - [How much memory my program uses or the tale of working set size](https://biriukov.dev/docs/page-cache/7-how-much-memory-my-program-uses-or-the-tale-of-working-set-size/#how-much-memory-my-program-uses-or-the-tale-of-working-set-size)
  - Love, Linux System Programming
  - [The Linux Kernel documentation](https://www.kernel.org/doc/html/latest/)

  ---

  ## Security
  - [API authentication and authorization](https://idratherbewriting.com/learnapidoc/docapis_more_about_authorization.html)
  - [HTTP Security Headers](https://nullsweep.com/http-security-headers-a-complete-guide/)
  - [An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
  - Identity, Claims, & Tokens. An OpenID Connect Primer: [1](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1), [2](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-2), [3](https://developer.okta.com/blog/2017/08/01/oidc-primer-part-3)
  - [JWT](https://jwt.io/)
  - [Awesome Web Security Awesome](https://github.com/qazbnm456/awesome-web-security)
  - McDonald, *Web Security for Developers*
  - Zalewski, *Tangled Web. A Guide to Securing Modern Web Applications*
  - [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)
  - [Practical Cryptography for Developers](https://cryptobook.nakov.com/)
  - [**!BONUS**] [Web Security Academy](https://portswigger.net/web-security) (n.b. this course is the updated version of the book *The Web Application Hacker's Handbook*)
  - [How to find third-party vulnerabilities in your Java code](https://www.redhat.com/sysadmin/find-java-vulnerabilities)
  - [**!BONUS**] [Flipper Zero](https://flipperzero.one/)

  ---

  ## Networking, Web & Browsers
  - [What is a network?](https://study-ccna.com/what-is-a-network/)
  - [An Introduction to Networking Terminology, Interfaces, and Protocols](https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols)
  - [Introduction to Networks](https://cs.lmu.edu/~ray/notes/netsandinets/)
  - [Computer Networking Fundamentals](https://iximiuz.com/en/series/computer-networking-fundamentals/)
  - [Daryl's TCP/IP Primer](https://www.ipprimer.com/#/)
  - [Packet Traveling](https://www.practicalnetworking.net/series/packet-traveling/packet-traveling/)
  - [Computer Networks: A Systems Approach](https://book.systemsapproach.org/index.html)
  - [Grigorik, High Performance Browser Networking: What every web developer should know about networking and web performance](https://hpbn.co/)
  - [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)
  - [Beej's Guide to Unix Interprocess Communication](https://beej.us/guide/bgipc/)
  - Sanders, Practical Packet Analysis
  - [SRE books](https://sre.google/books/)
  - [Web technology for developers](https://developer.mozilla.org/en-US/docs/Web)
  - [**!BONUS**] [Web Browser Engineering](https://browser.engineering/)
  - [**!BONUS**] [HTTP Toolkit](https://httptoolkit.tech/)
  - [SSL Termination](https://avinetworks.com/glossary/ssl-termination/)
  - [Web scraping](https://scrapism.lav.io/)
  - HTML & CSS & JS:
    - [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/)
    - [180 websites in 180 days](https://jenniferdewalt.com/)
    - [htmldog](https://htmldog.com/)
    - [(New) Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
    - [Learn web development](https://developer.mozilla.org/en-US/docs/Learn)
    - [The Modern JavaScript Tutorial](https://javascript.info/)
    - [Four Eras of JavaScript Frameworks](https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks)
    - [Move over JavaScript: Back-end languages are coming to the front-end](https://github.com/readme/featured/server-side-languages-for-front-end)
    - [The Future of Web Software Is HTML-over-WebSockets](https://alistapart.com/article/the-future-of-web-software-is-html-over-websockets/)
    - [**!OPINION**] [All software is web software now](https://driftingin.space/posts/all-software-is-web-software)
    - [**!OPINION**] [The Web's Next Transition](https://www.epicweb.dev/the-webs-next-transition)
    - [**!OPINION**] [The Web Is Fucked](https://thewebisfucked.com/)
      
  ---

  ## Software Documentation
  - [How to Write Doc Comments for the Javadoc Tool](https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html)
  - [**!OPINION**] [The Ins and Outs of Using Markdown for Technical Writing](https://document3-com/blog/markdown-for-technical-writing/)
  - [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)
  - [Documenting APIs: A guide for technical writers and engineers](https://idratherbewriting.com/learnapidoc/)
  - [**!OPINION**] [How Big Tech Runs Tech Projects and the Curious Absence of Scrum](https://blog.pragmaticengineer.com/project-management-at-big-tech/)

  ---

  ## Development and Team Organization:
  - [Organization and Team Patterns](http://www.dfpug.de/loseblattsammlung/online/workshop/design_patterns/sonstiges.htm)
  - [Famous Laws of Software Development](https://www.timsommer.be/famous-laws-of-software-development/)
  - [Scrum vs Waterfall vs Agile vs Lean vs Kanban](https://www.visual-paradigm.com/scrum/scrum-vs-waterfall-vs-agile-vs-lean-vs-kanban/)
  - [Atlassian Tool Suite](https://datarespons.com/atlassian-suite-tools-for-every-team-and-more-agility-in-projects/)
  - [The Code Review Pyramid](https://www.morling.dev/blog/the-code-review-pyramid/)
  - [**!OPINION**] [How Big Tech Runs Tech Projects and the Curious Absence of Scrum](https://blog.pragmaticengineer.com/project-management-at-big-tech/)

  ---

  ## Best Practices, Common Pitfalls & Basic Things You Should Know
  - Git:
    - [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
  - Shell Scripting
    - [Shell Script Best Practices](https://sharats.me/posts/shell-script-best-practices/)
  - Characters:
      - [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
      - [ASCII Table](https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/)
      - [Invisible characters](https://invisible-characters.com/)
  - Internationalization and localization (i18n)
    - [PO Files](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html)
  - Dates:
      - [All About java.util.Date](https://codeblog.jonskeet.uk/2017/04/23/all-about-java-util-date/)
      - [UTC is enough for everyone... right?](https://zachholman.com/talk/utc-is-enough-for-everyone-right)
      - [Storing UTC is not a silver bullet](https://codeblog.jonskeet.uk/2019/03/27/storing-utc-is-not-a-silver-bullet/)
      - [Designing a REST API: Unix time vs ISO-8601](https://nickb.dev/blog/designing-a-rest-api-unix-time-vs-iso-8601)
  - Numbers:
      - [Floating Point Math](https://0.30000000000000004.com/)
      - [**!BONUS**] [Float Toy](https://evanw.github.io/float-toy/)
      - [Why do arrays start at 0?](https://buttondown.email/hillelwayne/archive/why-do-arrays-start-at-0/)
  - RegEx:
      - [How to Find or Validate an Email Address](https://www.regular-expressions.info/email.html)
      - [Possessive Quantifiers](https://www.regular-expressions.info/possessive.html)
  - OS Compatibility:
    - [A Guide to POSIX](https://www.baeldung.com/linux/posix)
    - [The Power of the XDG Base Directory Specification](https://maex.me/2019/12/the-power-of-the-xdg-base-directory-specification/)
  - Unit-Testing:
    - [Modern Best Practices for Testing in Java](https://phauer.com/2019/modern-best-practices-testing-java/)
    - [Combining Object Mother and Fluent Builder for the Ultimate Test Data Factory](https://reflectoring.io/objectmother-fluent-builder/)
  - Libraries
      - [Google Best Practices for Java Libraries](https://jlbp.dev/)
  - Software Design:
      - [Alternatives to DTO](https://blog.frankel.ch/alternatives-dto/)
      - [**!OPINION**] [My 10 Years of Programming Experience](https://iximiuz.com/en/posts/my-10-years-of-programming-experience/)
      - [**!OPINION**] [LEGOs, Play-Doh, and Programming](https://weblog.jamisbuck.org/2008/11/9/legos-play-doh-and-programming)
  - Code Formatting:
      - [EditorConfig](https://editorconfig.org/)
      - [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
  - HTTP:
    - CORS:
      - [Developers don't understand CORS](https://fosterelli.co/developers-dont-understand-cors)
      - [You don't need that CORS request](https://nickolinger.com/blog/2021-08-04-you-dont-need-that-cors-request/)
      - [Understanding "same-site" and "same-origin"](https://web.dev/same-site-same-origin/)
    - [The perils of the "real" client IP](https://adam-p.ca/blog/2022/03/x-forwarded-for/)
    - [The HTTP crash course nobody asked for](https://fasterthanli.me/articles/the-http-crash-course-nobody-asked-for)
  - REST APIs:
    - [OpenAPI Specification](https://oai.github.io/Documentation/specification.html)
    - [**!OPINION**] [Roy Fielding's Misappropriated REST Dissertation](https://twobithistory.org/2020/06/28/rest.html)
    - [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
    - [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
    - [Standards.REST](https://standards.rest/)
    - [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
    - [The HTTP QUERY Method](https://www.ietf.org/id/draft-ietf-httpbis-safe-method-w-body--html)
  - Web:
    - [To www or not to www - Should you use www or not in your domain?](https://www.bjornjohansen.com/www-or-not)
    - [Making Websites Small](https://santurcesoftware.com/making-web-sites-small)
  - Containers:
    - [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
    - [Attack of the mutant tags!. Or why tag mutability is a real security threat](https://sysdig.com/blog/toctou-tag-mutability/)
    - [Container security best practices: Comprehensive guide](https://sysdig.com/blog/container-security-best-practices/)
  - Distributed Systems:
    - [**!OPINION**] [Don't start with microservices - monoliths are your friend](https://arnoldgalovics.com/microservices-in-production/)
    - [Fallacies of Distributed Systems](https://architecturenotes.co/fallacies-of-distributed-systems/)
    - [You Are Not Google](https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb)
    - [Microservices and the Big Ball of Mud](https://www.infoq.com/news/2014/08/microservices_ballmud/)
  - Networks:
    - [ICMP, Ping, and Traceroute - What I Wish I Was Taught](https://xkln.net/blog/icmp-ping-and-traceroute--what-i-wish-i-was-taught/)
    - [How to hide your IP address](https://educatedguesswork.org/posts/traffic-relaying/)
  - Memory:
    - [What Every Programmer Should Know About Memory](https://people.freebsd.org/~lstewart/articles/cpumemory.pdf)
    - [What Should I Know About Garbage Collection as a Java Developer?](https://www.azul.com/blog/what-should-i-know-about-garbage-collection-as-a-java-developer/)
  - Performance:
    - [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)
  - Programming Languages and Compilers:
    - [Is every language written in C?](https://softwareengineering.stackexchange.com/questions/267086/is-every-language-written-in-c)
    - [Assembly code vs Machine code vs Object code?](https://stackoverflow.com/questions/466790/assembly-code-vs-machine-code-vs-object-code)
    - [Introduction to Language Theory](https://cs.lmu.edu/~ray/notes/languagetheory/)
    - [Syntax](https://cs.lmu.edu/~ray/notes/syntax/)
    - [Syntax Design](https://cs.lmu.edu/~ray/notes/syntaxdesign/)
    - [Backus-Naur form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
    - [Resources for Amateur Compiler Writers](https://c9x.me/compile/bib/)
    - [Low-Code and the Democratization of Programming. Rethinking Where Programming Is Headed](https://www.oreilly.com/radar/low-code-and-the-democratization-of-programming/)
    - [The faker's guide to reading (x86) assembly language](https://www.timdbg.com/posts/fakers-guide-to-assembly/)
    - [**!BONUS**]  [Compiler Explorer](https://godbolt.org/)
    - [Favorite compiler and interpreter resources](https://lists.eatonphil.com/compilers-and-interpreters.html)
  - Miscellanea:
    - [Hard things in Computer Science](https://blog.frankel.ch/hard-things-computer-science/)
    - [How to name things: the hardest problem in programming](https://www.slideshare.net/pirhilton/how-to-name-things-the-hardest-problem-in-programming)
    - [What is the difference between Terminal, Console, Shell, and Command Line?](https://askubuntu.com/questions/506510/what-is-the-difference-between-terminal-console-shell-and-command-line)
    - [The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)
    - [What happens when you press a key in your terminal?](https://jvns.ca/blog/2022/07/20/pseudoterminals/)
    - [What happens when you load a URL?](https://danluu.com/navigate-url/)
    - [What Happens When A CPU Starts](https://lateblt.tripod.com/bit68.txt)
  ---

  # Beyond Java and the Web

  ---

  ## Teaching Yourself CS
  - [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html)
  - [Teach Yourself Computer Science](https://teachyourselfcs.com/)
    - [Learn how computers work](https://blog.bradfieldcs.com/learn-how-computers-work-e7d33dba0238)
    - [How to learn about database systems](https://blog.bradfieldcs.com/how-to-learn-about-database-systems-40c7432f471d#.5rjlp4fqq)
  - [Path to a free self-taught education in Computer Science!](https://github.com/ossu/computer-science)
  - [From the Transistor to the Web Browser](https://github.com/geohotfromthetransistor)

  ---

  ## Classics & Bibles
  - Sussman & Abelson, Structure and Interpretation of Computer Programs (SICP)
  - Bryant, Computer Systems: A Programmer's Perspective (CS:APP3e)
  - Patterson and Hennessy, [Computer Organization and Design (MIPS Edition). The Hardware/Software Interface](https://shop.elsevier.com/books/computer-organization-and-design-mips-edition/patterson/978-0-12-407726-3#full-description)
  - [**!FUTURE CLASSIC**] [Dive into Systems](https://diveintosystems.org/singlepage/)
  - Nisan and Schocken, The lifecylElements of Computing Systems (nand2tetris)
  - Tanenbaum and Bos, Modern Operating Systems
  - Tanenbaum and Wetherall, Computer Networks (6ed)
  - Ullman and Hopcroft, Introduction to Automata Theory, Languages, and Computations (Cinderella Book)
  - Aho, Lam, Sethi, and Ullman, Compilers: Principles, Techniques, and Tools (Dragon Book)
  - [**!FUTURE CLASSIC**] [Nystrom, Crafting Interpreters](https://craftinginterpreters.com/)
  - Cormen, Leiserson, Rivest, and Stein, Introduction to Algorithms (The Big Book)
  - [**!BEGINNER-FRIENDLY**] [Sedgewick and Wayne, Algorithms](https://algs4.cs.princeton.edu/home/) (4ed)
  - Kernighan and Ritchie, The C Programming Language
  - Knuth, Patashnik, and Graham, Concrete Mathematics: A Foundation for Computer Science
  - Knuth, The Art of Computer Programming
  - Bishop, Pattern Recognition and Machine Learning
  - Norvig, Paradigms of Artificial Intelligence Programming
  - Jurafsky & Martin, [Speech and Language Processing (3rd ed. draft)](https://web.stanford.edu/~jurafsky/slp3/) (SLP3)
  - Snyder, Nemeth, Whaley, Hein, Mackin, UNIX and Linux System Administration Handbook
  - Bovet & Cesati, Understanding the Linux Kernel
  - [Rubini, Linux Device Drivers](https://lwn.net/Kernel/LDD3/)
  - [Kerrisk, The Linux Programming Interface](https://man7.org/tlpi/)
  - [Brendan, Systems Performance: Enterprise and the Cloud](https://www.brendangregg.com/systems-performance-2nd-edition-book.html)
  - [**!FUTURE CLASSIC**] Kleppmann, [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
  - [**!FUTURE CLASSIC**] Petrov, [Database Internals: A Deep Dive Into How Distributed Data Systems Work](https://www.databass.dev/)

  ---

  ## Math
  - [Kun, A Programmer's Introduction to Mathematics](https://pimbook.org/)
  - [Mathematics for the adventurous self-learner](https://www.neilwithdata.com/mathematics-self-learner)
  - [3Blue1Brown](https://www.youtube.com/c/3blue1brown/videos)
  - [Khan Academy](https://www.khanacademy.org/math)

  ## CS/FOSS History and Hacking/Cyberpunk Culture
  - Broca, Utopie du logiciel libre. Du bricolage informatique à la réinvention sociale (cfr. italian version, [Utopia del Software Libero](https://www.mimesisedizioni.it/libro/9788857547046))
  - [ESR, How To Become A Hacker](http://www.catb.org/~esr/faqs/hacker-howto.html#why_this)
  - ESR, The Cathedral & the Bazaar
  - Kernighan, UNIX: A History and a Memoir
  - Kernighan, Understanding the Digital World: What You Need to Know about Computers, the Internet, Privacy, and Security
  - Petzold, Code: The Hidden Language of Computer Hardware and Software, 2nd Edition
  - Williams, Free as in Freedom: Richard Stallman's Crusade for Free Software
  - Torvalds, Just for Fun
  - Knuth, Things a Computer Scientist Rarely Talks About
  - Hafner, Where wizards stay up late
  - Waldrop, The Dream Machine: Licklider and the Revolution That Made Computing Personal
  - Rheingold, Tools for Thought. The History and Future of Mind-Expanding Technology
  - Bhattacharya, The Man from the Future: The Visionary Life of John von Neumann
  - [The History of the Graphical User Interface - 1945 to 1980](https://lunduke.substack.com/p/the-history-of-the-graphical-user)
  - Gleick, The Information: A History, a Theory, a Flood
  - Hofstadter, Gödel, Escher, Bach: an Eternal Golden Braid
  - Kidder, The Soul of a New Machine
  - Kushner, Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture
  - Levy, Hackers: Heroes of the Computer Revolution
  - Mitnick &s Simon, Ghost in the Wires: My Adventures as the World's Most Wanted Hacker
  - Erickson, Hacking: The Art of Exploitation
  - Huang, The Hardware Hacker: Adventures in Making and Breaking Hardware
  - Naitoh, How the ThinkPad Changed the World ― and Is Shaping the Future
  - Gibson, Neuromancer
  - Dick, Do Androids Dream of Electric Sheep?
  - Shirow, The Ghost in the Shell
  - Otomo, Akira

  ---

  ## Finest Sources of Geek Entertainment
  - [LWN.net](https://lwn.net/)
  - [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA)
  - [Hacker News](https://news.ycombinator.com/)
  - [The Pragmatic Engineer](https://blog.pragmaticengineer.com/)
  - [Vicki Boykis](http://veekaybee.github.io/)
  - [Julia Evans](https://jvns.ca/)
  - [Simon Willison](https://simonwillison.net/)
  - [Gwern](https://www.gwern.net/)
  - [Ivan Velichko](https://iximiuz.com/en/)
  - [Martin Kleppmann](https://martin.kleppmann.com/)
  - [Ben Eater](https://eater.net/)
  - [Sam Zeloof](http://sam.zeloof.xyz/)
  - [**!ITA**] [Paolo Aliverti](https://www.youtube.com/c/paoloaliverti/featured)
  - [Box of Cables](https://boxofcables.dev/)
  - [antirez](http://antirez.com/latest/0)
  - [The Lunduke Journal of Technology](https://lunduke.substack.com/)
  - [The Buckblog, assorted ramblings by Jamis Buck](https://weblog.jamisbuck.org/)
  - [Jon Skeet's coding blog](https://codeblog.jonskeet.uk/)
  - [Schneier on Security](https://www.schneier.com/)
  - [Coding Horror](https://blog.codinghorror.com/)
  - [Opensource.com](https://opensource.com/)
  - [Enable Sysadmin](https://www.redhat.com/sysadmin/welcome-enable-sysadmin)
  - [Baeldung Weekly Review](https://www.baeldung.com/category/weekly-review/)
  - [Java Annotated](https://blog.jetbrains.com/idea/tag/java-annotated/)
  - [Architecture Notes](https://architecturenotes.co/)
  - [ByteByteGo, by Alex Xu](https://blog.bytebytego.com/?utm_source=site)
  - [The History of the Web](https://thehistoryoftheweb.com/)
  - [Happy Path Programming](https://anchor.fm/happypathprogramming/episodes/66-The-Journey-to-Rust-with-Christopher-Hunt-e1meaqh)
  - [Programming Talks](https://www.programmingtalks.org)
  - [FriendlyWire](https://friendlywire.com/)
  - [The Cloudflare Blog](https://blog.cloudflare.com/tag/engineering/)
  - [The Netflix Tech Blog](https://netflixtechblog.com/)

  ---

  ## Other Programming Languages
  - Rust

    <details>
      <summary>more</summary>

      - [The Rust Programming Language](https://doc.rust-lang.org/book/index.html)
      - [The Embedded Rust Book](https://docs.rust-embedded.org/book/index.html)
      - [Build your own JIRA with Rust](https://github.com/LukeMathWalker/build-your-own-jira-with-rust)
      - [Zero To Production In Rust. An introduction to backend development](https://www.zero2prod.com/index.html)
      - [The current state of Rust web frameworks](https://blog.logrocket.com/current-state-rust-web-frameworks/)

    </details>

  - Go

      <details>
      <summary>more</summary>

      - [A Tour of Go](https://go.dev/tour/welcome/1)
      - [Go by Example](https://gobyexample.com/)
      - [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/)
      - [Go Roadmap](https://roadmap.sh/golang)
      - [Awesome Go](https://github.com/avelino/awesome-go)

    </details>

  - [C](https://blog.bradfieldcs.com/how-to-learn-c-59222a627a4c)/C++
  - [Kotlin](https://kotlinlang.org/docs/getting-started.html)/[Scala](https://docs.scala-lang.org/tutorials/scala-for-java-programmers.html)
  - [Ruby](https://www.ruby-lang.org/en/documentation/quickstart/)
  - [Python](https://docs.python.org/3/tutorial/)
  - [Nim](https://nim-lang.org/docs/tut1.html)
  - [Erlang](https://www.erlang.org/doc/getting_started/intro.html#prerequisites)/[elixir](https://elixir-lang.org/getting-started/introduction.html)
  - [Zig](https://ziglang.org/learn/overview/)

  ---

  ## Embedded Systems & Electronics
  - [A guide to getting started with embedded systems](https://yinka.dev/blog/a-guide-to-getting-started-with-embedded-systems/)
  - [What is an Arduino?](https://opensource.com/resources/what-arduino)
  - [What is a Raspberry Pi?](https://opensource.com/resources/raspberry-pi)
  - [FPGA vs. Microcontroller. What is the Difference?](https://www.mclpcb.com/blog/fpga-vs-microcontroller/)
  - [Arduino Starter Kit](https://store.arduino.cc/products/arduino-starter-kit-multi-language)
  - [Basic knowledge about principles and techniques behind the Arduino ecosystem](https://docs.arduino.cc/learn/)
  - [The Untold History of Arduino](https://arduinohistory.github.io/)
  - [Lessons in Electric Circuits](https://www.allaboutcircuits.com/textbook/)
  - Platt, Electronics: Learning by Discovery: A hands-on primer for the new electronics enthusiast
  - [Intel HEX](https://en.wikipedia.org/wiki/Intel_HEX)
  - [Microsoldering 101](https://www.youtube.com/watch?v=xFqA9u6y0Fk&list=PL4INaL5vWobD_CltiZXr7K46oJ33KvwBt)
  - [ So you want to build an embedded Linux system?](https://jaycarlson.net/embedded-linux/)
  - [**!BONUS**] [Assembly Language Adventures](https://www.xorpd.net/pages/x86_adventures.html)
  - [**!BONUS**] [Post-apocalyptic programming](https://zserge.com/posts/post-apocalyptic-programming/)
  - [**!BONUS**] [A Journey in Creating an Operating System Kernel](https://539kernel.com/book/)

---

  ## Open Source, DIY & Right to Repair
  - [6 pivotal moments in open source history](https://opensource.com/article/18/2/pivotal-moments-history-open-source)
  - [Convivial software (or, why open source matters)](https://comment.org/convivial-software-or-why-open-source-matters/)
  - [What is open hardware?](https://opensource.com/resources/what-open-hardware)
  - [Open Source Ecology](https://opensourceecology.dozuki.com/#Section_What_is_OSE)
  - [iFixit](https://www.ifixit.com/)
  - [Repair Manifesto](https://www.platform21.nl/download/4375)
  - [Right to Repair](https://repair.eu/)
  - [RepairCafé](https://www.repaircafe.org/en/)

  ---

  ## Job Hunting
  - [Kanna, Job Hunting Resources for Developers](https://randallkanna.com/get-the-ultimate-list/)
  - [How to Learn to Code & Get a Developer Job in 2023](https://www.freecodecamp.org/news/learn-to-code-book/)
  - [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job)
    - [**!ITA**] [Awesome Italia Remote](https://github.com/italiaremote/awesome-italia-remote)
  - [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)
  - [Interview Preparation Kits](https://www.hackerrank.com/interview/preparation-kits)
  - [Top Interview Questions](https://leetcode.com/explore/interview/card/top-interview-questions-easy/)
  - [Grokking Coding Interview Patterns in Go](https://www.educative.io/courses/grokking-coding-interview-patterns-go)
  - [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)
  - [Reverse interview](https://github.com/viraptor/reverse-interview)
  - [Questions I'm asking in interviews](https://jvns.ca/blog/2013/12/30/questions-im-asking-in-interviews/)
  - [The Joel Test: 12 Steps to Better Code]( https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)

  [^1]: Other similar stuff you may find useful: [Awesome Java](https://github.com/akullpp/awesome-java#cluster-management) (huge list of stuff regarding Java), [Web Developer RoadMap](https://github.com/kamranahmedse/developer-roadmap) (more general view of what is useful/required to develop for the web).

  [^2]: A tempative classification of roles in software world:
  - software programmer/coder/developer: someone usually without a CS degree who learns programming in a bottom-up approach by building software
  - computer scientist: academic researcher who learns computer systems in a top-down approach
  - software engineer/architect: someone between the two above who is responsible for the overall design and lifecycle of the software

  [^3]: It's hard to choose a specific course since there's plenty of training material available on the web, so just pick one and make sure that you really understand the topics mentioned below. If in doubt, try with the video lectures ([1](https://www.coursera.org/learn/cs-programming-java) + [2](https://www.coursera.org/learn/cs-algorithms-theory-machines)) of the book [Computer Science: An Interdisciplinary Approach](https://introcs.cs.princeton.edu/java/home/) by Wayne and Sedgewick.

  [^4]: There's a number of [IDEs](https://www.tutorialworks.com/java-ide/) available for Java in this day and age, but my personal preference goes to Visual Studio Code as the ideal programming environment for polyglot developers: just to mention some features, VSCode allows you to [open a remote folder on any remote machine, virtual machine, or container with a running SSH server](https://code.visualstudio.com/docs/remote/ssh) (also integrating nicely with [WSL](https://code.visualstudio.com/docs/remote/wsl)), [visualize data structures](https://addyosmani.com/blog/visualize-data-structures-vscode/) while debugging and can run in a lightweight version in a [web browser](https://vscode.dev/) without installing anything.
