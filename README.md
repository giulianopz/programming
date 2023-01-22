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
  > Modern programming is becoming complex, uninteresting, full of layers that just need to be glued. It is losing most of its beauty. In that sense, most programming is no longer art nor high engineering (most programs written at big and small corporations are trivial: coders just need to understand certain ad-hoc abstractions, and write some logic and [glue code](https://en.m.wikipedia.org/wiki/Glue_code)). Only very few programmers are facing the artistic face of programming. Only very few programmers are facing high engineering in programming. 
  >> (Salvatore Sanfilippo, aka [antirez](http://invece.org/))

  In fact, an [application software](https://en.wikipedia.org/wiki/Application_software) usually consists of levels (or layers) of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Levels_of_abstraction), wherein each level represents a different model of the same information and processes, but with varying amounts of detail. Each relatively abstract, higher level builds on a relatively concrete, lower level, which tends to provide an increasingly granular representation.

  Abstractions are useful, but all non-trivial abstractions, to some degree, are [leaky](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/). So, blindly ignoring what happens at lower levels can cause performance issues or (worst) unintended bugs which are hard to debug (e.g. inscrutable [incidents](https://www.andrewdoss.dev/writing/timeouts/) in production). Solving such issues thanks to Q&A websites like Stack Overflow does not help learning what actually went wrong leaving a certain sense of frustration (a common feeling for [Linux](https://fabiensanglard.net/a_linux_evening/index.html) users).

  Unfortunately, the enterprise software world is largely dominated by the use of [frameworks](https://en.wikipedia.org/wiki/Software_framework) (e.g. Spring vs Quarkus on back-end side, Angular vs React on front-end side), an abstraction which is useful to avoid code bloat but limits the creative job of a programmer, making him just an expert user of a particular framework. These frameworks are also susceptible to be replaced by other competing frameworks, generically perceived as "innovative" for some reason. The only way to avoid to be forced to learn a framework every N years is to understand what happens behind the abstractions, which in turn means to get a good grasp of computer architecture investigating what happens at the hardware/software interface (*getting closer to the metal*, as they say). Once learned the basics of programming, a first step in this direction is to re-implement from scratch something [a good piece of software](https://redis.pjam.me/).

  [^1]: Other similar stuff you may find useful: [Awesome Java](https://github.com/akullpp/awesome-java#cluster-management) (huge list of stuff regarding Java), [Web Developer RoadMap](https://github.com/kamranahmedse/developer-roadmap) (more general view of what is useful/required to develop for the web).

  [^2]: A tempative classification of roles in software world:
  - software programmer/coder/developer: someone usually without a CS degree who learns programming in a bottom-up approach by building software
  - computer scientist: academic researcher who learns computer systems in a top-down approach
  - software engineer/architect: someone between the two above who is responsible for the overall design and lifecycle of the software
