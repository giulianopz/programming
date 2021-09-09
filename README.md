## Useful resources for newbies in Java for web-oriented programming:

0. Overview of the Path: [The Web Development (Frontend + Backend) RoadMap](https://github.com/kamranahmedse/developer-roadmap)

1. Java basics:
    1. *Metodologie di Programmazione* (Navigli, 2018)
    2. [Maven](https://maven.apache.org/guides/getting-started/index.html):
        * [Maven archetype to create a project configured for Java 11 and using JUnit 5](https://github.com/deangerber/java11-junit5-archetype)
    3. Horstmann, *Core Java Fundementals Vol. 1*
    4. Design Patterns: [GoF Design Patterns with examples using Java and UML](https://www.researchgate.net/publication/307449818_GoF_Design_Patterns_with_examples_using_Java_and_UML)
    5. Advanced Topics:
        1. Generics
        2. Reflection
        3. Concurrency, Multi-threading, Async Programming:
            * [Applying Concurrency and Multi-threading to Common Java Patterns](https://www.pluralsight.com/courses/java-patterns-concurrency-multi-threading)
            * [Advanced Java Concurrent Patterns](https://www.pluralsight.com/courses/java-concurrent-patterns-advanced)
            * [Java Fundamentals: Asynchronous Programming Using CompletionStage](https://www.pluralsight.com/courses/java-fundamentals-asynchronous-programming-completionstage)
            * [Reactive Programming in Java 12 with RxJava](https://www.pluralsight.com/courses/reactive-programming-java-12-rxjava-2)
            * [JConsole](https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html)
            * [Monitoring threads](http://www.jvmmonitor.org/doc/#Monitoring_threads)
            * Reactive Programming: **Mutiny** + **Vert.x**

2. Algorithms:
    1. [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
    2. Sedgewick & Wayne, Algorithms [1](https://www.coursera.org/learn/algorithms-part1) + [2](https://www.coursera.org/learn/algorithms-part2)
    3. Kopec, *Classic Computer Science Problems in Java*

3. Most Popular Libraries/Frameworks for Java:
    * Logging: **SLF4J**
    * POJO-DTO Mapping: [MapStruct](https://mapstruct.org/)
    * JSON Parsing: **Jackson**
    * REST APIs: JAX-RS (**RESTEasy**, **Jersey**, **Apache CXF**)
    * Persistence:
        * JPA + Hibernate + [HQL/JPQL](https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/ch11.html): Vlad Mihalcea, *High-Performance Java Persistence*
        * Non-Relational DBs: **GraphQL**, **neo4j**, **MongoDB**, **Cassandra**
        * ElasticSearch
    * Messaging: JMS (**ActiveMQ**, **Rabbit**, **Kafka**)
    * Test-Driven Development:
        * Unit/Integration Testing: **JUnit 5** + **H2** + **Mockito** + **WireMock** + **RestAssured** + **Hamcrest**
        * E2E Testing: **Selenium**
    * Excel: **Apache POI**
    * PDF: **iText/OpenPDF**
    * Netflix stack: Service Discovery (**Eureka**), Circuit Breaker (**Hystrix**), Intelligent Routing (**Zuul**) and Client Side Load Balancing (**Ribbon**)
    * Spring (Boot) Framework:
        * Hands-on Practical Tutorials: [Spring Boot](https://www.baeldung.com/spring-boot)
        * High-level Handbook: Craig Walls, *Spring in Action*
        * Low-level Handbook: Iuliana Cosmina, *Pivotal Certified Professional Spring Developer Exam: A Study Guide*
        * [Spring Security](https://docs.spring.io/spring-security/site/docs/5.0.0.RELEASE/reference/htmlsingle/#jc-oauth2login-sample-redirect-uri)
        * [Spring AOP](https://docs.spring.io/spring/docs/4.3.x/spring-framework-reference/html/aop.html)
        * [Spring Batch](https://www.toptal.com/spring/spring-batch-tutorial)
    * [Quarkus](https://quarkus.io/guides/)

4. RESTful APIs:
    * [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
    * [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
    * [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
    * [JSON In a Nutshell](https://medium.com/omarelgabrys-blog/json-in-a-nutshell-7d638dfea7cc)
    * OpenAPI Specification + **Swagger**

5. Microservices:
    * Richardson, [*Microservices Patterns* (2018)](https://microservices.io/)
    * Carnell, *Spring Microservices in Action* (2017)

6. Cloud:
    * [IaaS PaaS SaaS Cloud Service Models](https://www.ibm.com/cloud/learn/iaas-paas-saas)

7. UNIX Toolbox:
    * [basic UNIX](https://matt.might.net/articles/basic-unix/)
    * [bash](https://matt.might.net/articles/bash-by-example/)
    * [text manipulation](https://matt.might.net/articles/sculpting-text/)
    * [vi survival guide](https://www.nuxified.org/vi_survival_guide/) + [bonus](https://vim-adventures.com/)
    * [Learn Git Branching](https://learngitbranching.js.org/)
    * [curl](https://curl.haxx.se/docs/httpscripting.html)
    * [How to use cron in Linux](https://opensource.com/article/17/11/how-use-cron-linux)
    * [RegexOne](https://regexone.com/)
    * [The Unix Game](https://www.unixgame.io/unix50)

8. [WSL as a Linux Development Environment on Windows](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-docker-tmux-and-vscode)

9.  [DevOps](https://opensource.com/article/19/4/devops-pipeline):
    * [Jenkins](https://www.edx.org/course/introduction-to-jenkins)
    * Docker/Podman + Kubernetes + [Openshift](https://www.redhat.com/en/services/training/do288-red-hat-openshift-development-ii-containerizing-applications)
    * [AWS](https://adayinthelifeof.nl/2020/05/20/aws.html)

10. Security:
    * [API authentication and authorization](https://idratherbewriting.com/learnapidoc/docapis_more_about_authorization.html)
    * [HTTP Security Headers](https://nullsweep.com/http-security-headers-a-complete-guide/)
    * [What is a network?](https://study-ccna.com/what-is-a-network/)
    * [An Introduction to Networking Terminology, Interfaces, and Protocols](https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols)]{.ul}
    * [JWT](https://jwt.io/)
    * [Subnetting with IPv6](https://www.codeproject.com/Articles/660429/Subnetting-with-IPv-Part-2)
    * [OWASP Top 10 Vulnerabilities List - You're Probably Using It Wrong!](https://resources.whitesourcesoftware.com/blog-whitesource/owasp-top-10-vulnerabilities)
    * [Identity, Claims, & Tokens -- An OpenID Connect Primer](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1)
    * [Get Started with Spring Security 5.0 and OIDC](https://developer.okta.com/blog/2017/12/18/spring-security-5-oidc)
    * Malcolm McDonald, *Web Security for Developers*
    * Michal Zalewski, *Tangled Web. A Guide to Securing Modern Web Applications*
    * [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html)
    * [Web Security Academy](https://portswigger.net/web-security) (n.b. this course is the updated version of the book *The Web Application Hacker's Handbook*)

11. Newtorking:
    * [Ilya Grigorik, High Performance Browser Networking: What every web developer should know about networking and web performance](https://hpbn.co/)
	* [SRE books](https://sre.google/books/)

11. Agile/[Scrum](https://www.scrumguides.org/scrum-guide.html)

12. Miscellanea:
    * [Unicode and Character Sets](https://www.joelonsoftware.com/2003/10/08the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
    * [java.util.Date](https://codeblog.jonskeet.uk/2017/04/23/all-about-java-util-date/)
