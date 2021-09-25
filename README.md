## Useful resources for newbies in Java for web-oriented programming:

1. [Web Developer RoadMap](https://github.com/kamranahmedse/developer-roadmap)

2. Java basics:
    1. *Metodologie di Programmazione* (Navigli, 2018)
    2. [Maven](https://maven.apache.org/guides/getting-started/index.html)
    3. Horstmann, *Core Java Fundementals (Vol. 1 & 2)*
    4. Design Patterns:
       * [GoF Design Patterns with examples using Java and UML](https://www.researchgate.net/publication/307449818_GoF_Design_Patterns_with_examples_using_Java_and_UML)
    5. Advanced Topics:
        1. Generics
        2. Reflection
        3. Concurrency, Multi-threading, Parallelism, Asynchronus Programming:
            * [Applying Concurrency and Multi-threading to Common Java Patterns](https://www.pluralsight.com/courses/java-patterns-concurrency-multi-threading)
            * [Advanced Java Concurrent Patterns](https://www.pluralsight.com/courses/java-concurrent-patterns-advanced)
            * [Java Fundamentals: Asynchronous Programming Using CompletionStage](https://www.pluralsight.com/courses/java-fundamentals-asynchronous-programming-completionstage)
            * [Reactive Programming in Java 12 with RxJava](https://www.pluralsight.com/courses/reactive-programming-java-12-rxjava-2)
            * [JConsole](https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html)
            * [Monitoring threads](http://www.jvmmonitor.org/doc/#Monitoring_threads)
            * Reactive Programming: [**Mutiny**](https://smallrye.io/smallrye-mutiny/guides) + [**Vert.x**](https://vertx.io/docs/vertx-core/java/)

3. Algorithms:
    1. [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
    2. Sedgewick & Wayne, Algorithms [1](https://www.coursera.org/learn/algorithms-part1) + [2](https://www.coursera.org/learn/algorithms-part2)
    3. Kopec, *Classic Computer Science Problems in Java*

4. Most Popular Libraries/Frameworks for Java:
    * Logging: [**SLF4J**](https://www.baeldung.com/slf4j-with-log4j2-logback)
    * POJO-DTO Mapping: [MapStruct](https://mapstruct.org/)
    * JSON Parsing: [**Jackson**](https://www.baeldung.com/jackson)
    * [JAX-WS](https://www.baeldung.com/jax-ws)
    * [JAX-RS](https://www.baeldung.com/jax-rs-spec-and-implementations) (**RESTEasy**, **Jersey**, **Apache CXF**)
    * Persistence:
        * [JPA (**Hibernate**)](https://www.baeldung.com/learn-jpa-hibernate) + [HQL/JPQL](https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/ch11.html):
          * Vlad Mihalcea, *High-Performance Java Persistence*
        * Non-Relational DBs: **GraphQL**, **neo4j**, **MongoDB**, **Cassandra**
        * [ElasticSearch](https://www.baeldung.com/elasticsearch-java)
    * Messaging:
      * JMS (**ActiveMQ**, **Rabbit**, **Kafka**)
    * Test-Driven Development:
        * Unit/Integration Testing: [**JUnit 5**](https://www.baeldung.com/junit-5) + [**H2**](http://www.h2database.com/html/tutorial.html) + [**Mockito**](https://www.baeldung.com/mockito-series) + [**WireMock**](http://wiremock.org/docs/getting-started/) + [**RestAssured**](https://www.baeldung.com/rest-assured-tutorial) + [**Hamcrest**](http://hamcrest.org/JavaHamcrest/tutorial)
        * E2E Testing: [**Selenium**](https://www.selenium.dev/documentation/guidelines/)
    * File manipulation:
      * Excel:
        * [**Apache POI**](https://www.baeldung.com/java-microsoft-excel)
      * PDF:
        * [**iText/OpenPDF**](https://www.baeldung.com/java-pdf-creation)
    * [Netflix stack](https://www.baeldung.com/tag/netflix/): Service Discovery (**Eureka**), Circuit Breaker (**Hystrix**), Intelligent Routing (**Zuul**) and Client Side Load Balancing (**Ribbon**)
    * Spring (Boot) Framework:
        * [Spring Boot](https://www.baeldung.com/spring-boot) (hands-on practical tutorials)
        * Walls, *Spring in Action* (high-level)
        * Cosmina, *Pivotal Certified Professional Spring Developer Exam: A Study Guide* (low-level)
    * [Quarkus](https://quarkus.io/guides/)

5. RESTful APIs:
    * [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
    * [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
    * [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
    * [JSON In a Nutshell](https://medium.com/omarelgabrys-blog/json-in-a-nutshell-7d638dfea7cc)
    * [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0):
      * [**Swagger**](https://swagger.io/tools/open-source/open-source-integrations/)

6. Microservices:
    * Richardson, [*Microservices Patterns*](https://microservices.io/) (2018)
    * Carnell, *Spring Microservices in Action* (2017)

7. Cloud:
    * [IaaS PaaS SaaS Cloud Service Models](https://www.ibm.com/cloud/learn/iaas-paas-saas)
    * [Java Cloud Development](https://howtodoinjava.com/cloud/java-cloud-development-introduction-and-tools/#openshift)

8. UNIX Toolbox:
    * [Basic UNIX](https://matt.might.net/articles/basic-unix/)
    * [Bash](https://matt.might.net/articles/bash-by-example/)
    * [Text Manipulation with grep, sed and awk](https://matt.might.net/articles/sculpting-text/)
    * [vi Survival Guide](https://www.nuxified.org/vi_survival_guide/)
    * [git](https://learngitbranching.js.org/)
    * [curl](https://curl.haxx.se/docs/httpscripting.html)
    * [cron](https://opensource.com/article/17/11/how-use-cron-linux)
    * [regex](https://regexone.com/)
    * [**!BONUS**] [Vim Adventures](https://vim-adventures.com/)
    * [**!BONUS**] [The Unix Game](https://www.unixgame.io/unix50)

9.  [WSL as a Linux Development Environment on Windows](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-docker-tmux-and-vscode)

10. [DevOps](https://opensource.com/article/19/4/devops-pipeline):
    * [Jenkins](https://www.edx.org/course/introduction-to-jenkins)
    * [Docker](https://www.docker.com/get-started)/[Podman + Skopeo + Buildah](https://www.redhat.com/en/blog/say-hello-buildah-podman-and-skopeo)
    * [Kubernetes](https://kube.academy/)
    * [Openshift](https://www.redhat.com/en/services/training/do288-red-hat-openshift-development-ii-containerizing-applications)
    * [AWS](https://adayinthelifeof.nl/2020/05/20/aws.html)

11. Security:
    * [API authentication and authorization](https://idratherbewriting.com/learnapidoc/docapis_more_about_authorization.html)
    * [HTTP Security Headers](https://nullsweep.com/http-security-headers-a-complete-guide/)
    * [JWT](https://jwt.io/)
    * [OWASP Top 10 Vulnerabilities List](https://resources.whitesourcesoftware.com/blog-whitesource/owasp-top-10-vulnerabilities)
    * [Identity, Claims, & Tokens -- An OpenID Connect Primer](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1)
    * Malcolm McDonald, *Web Security for Developers*
    * Michal Zalewski, *Tangled Web. A Guide to Securing Modern Web Applications*
    * [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)
    * [Web Security Academy](https://portswigger.net/web-security) (n.b. this course is the updated version of the book *The Web Application Hacker's Handbook*)

12. Networking:
    * [What is a network?](https://study-ccna.com/what-is-a-network/)
    * [An Introduction to Networking Terminology, Interfaces, and Protocols](https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols)
    * [Ilya Grigorik, High Performance Browser Networking: What every web developer should know about networking and web performance](https://hpbn.co/)
	* [SRE books](https://sre.google/books/)

12. Agile/[Scrum](https://www.scrumguides.org/scrum-guide.html)

13. Miscellanea:
    * [Unicode and Character Sets](https://www.joelonsoftware.com/2003/10/08the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
    * [java.util.Date](https://codeblog.jonskeet.uk/2017/04/23/all-about-java-util-date/)

14. Go beyond Web Development:
      1. [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html)
      2. [Teach Yourself Computer Science](https://teachyourselfcs.com/)
      3. [Path to a free self-taught education in Computer Science!](https://github.com/ossu/computer-science)
