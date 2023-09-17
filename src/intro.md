# Introduction

This is a dump of links I keep collecting as I progress as a software programmer. I use it to have a personal log of good stuff I discover while wandering about in the web.

Ideally, it describes a learning path to get into programming starting from Java, which is just the typical entry point (or entry level) programming language for many people in enterprise software development. Despite all the [criticism](https://en.wikipedia.org/wiki/Criticism_of_Java), the world still runs on Java 8[^1]: since it's an ubiquitous language, you will encounter it even in the most remote places (e.g. in a [PlayStation](https://www.mikekohn.net/micro/playstation2_java.php)). On the other hand, some of these critics are well-founded[^2]. So, equally, having a look to [modern programming languages](./languages.md) sounds reasonable. Especially to Go, which really seems to be destined to replace Java pretty everywhere. Generally speaking, any programming language is good as long as it allows you to get your job done (just like any natural language is good as long as it allows you to express yourself).

Although the repo is quite dense, one must keep in mind that the focus of learning to code should always be on learning abstract concepts and their low-level implementation details, which underlie the tech stack used in modern programming, rather than specific and ephemeral tools (e.g. libraries, frameworks, etc.):

> Modern programming is becoming complex, uninteresting, full of layers that just need to be glued. It is losing most of its beauty. In that sense, most programming is no longer art nor high engineering (most programs written at big and small corporations are trivial: coders just need to understand certain ad-hoc abstractions, and write some logic and [glue code](https://en.m.wikipedia.org/wiki/Glue_code)). Only very few programmers are facing the artistic face of programming. Only very few programmers are facing high engineering in programming. 
>> Salvatore Sanfilippo[^3]

In fact, an [application software](https://en.wikipedia.org/wiki/Application_software) usually consists of levels (or layers) of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Levels_of_abstraction), wherein each level represents a different model of the same information and processes, but with varying amounts of detail. Each relatively abstract, higher level builds on a relatively concrete, lower level, which tends to provide an increasingly granular representation.

Abstractions are useful, but all non-trivial abstractions, to some degree, are leaky[^4]. So, blindly ignoring what happens at lower levels can cause performance issues or (worst) unintended bugs which are hard to debug (e.g. inscrutable incidents in production[^5]). Solving such issues thanks to Q&A websites like Stack Overflow does not help learning what actually went wrong leaving a certain sense of frustration (a common feeling for Linux users[^6]).

Unfortunately, the enterprise software world is largely dominated by the use of [frameworks](https://en.wikipedia.org/wiki/Software_framework) (e.g. Spring vs Quarkus on backend side, Angular vs React on frontend side), an abstraction which is useful to avoid code bloat but limits the creative job of a programmer, making him just an expert user of a particular framework. These frameworks are also susceptible to be replaced by other competing frameworks, generically perceived as "innovative" for some reason. The only way to avoid to be forced to learn a framework every N years is to understand what happens behind the abstractions, which means to develop a good intuition of what happens at the hardware/software interface (*getting closer to the metal*, as the kool kids say). This is why so frequently people attempt to re-implement [from scratch](./from-scratch.md) a good piece of software to understand "how things work"[^7].

Undoubtedly, this crafting or artistic view[^8] of the act of programming implies a longer (lifelong[^9]?) and steeper learning curve than any fancy YouTube tutorial would commit to, but this is still better than getting stuck in a plateau after a brief exponential growth where developers end up acting merely as code monkeys or blue collars. Sometimes the working environment of IT companies with big moneys itself tricks you into:

> voluntarily ceasing to improve because of a belief that expert status has been reached and thus further improvement is not possible.. This opting into indefinite mediocrity is the entry into an oblique phase in skills acquisition that I will call "Expert Beginner"[^10].

In this respect, the following chapters naturally derail from application programming to [system programming](https://en.wikipedia.org/wiki/Systems_programming), and finally to hardware stuff. The last chapters mostly deal with collateral and/or enjoyable aspects of programming.

---

[^1]: Vicki Boykis, [IT runs on Java 8](https://vickiboykis.com/2019/05/10/it-runs-on-java-8/)

[^2]: Jamis Buck, [LEGOs, Play-Doh, and Programming](https://weblog.jamisbuck.org/2008/11/9/legos-play-doh-and-programming)

[^3]: aka [antirez](http://invece.org/)

[^4]: Joel Spolsky, [The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)

[^5]: Andrew Doss, [How Long is a Negative Timeout?](https://www.andrewdoss.dev/writing/timeouts/)

[^6]: Fabien Sanglard, [A Linux evening...](https://fabiensanglard.net/a_linux_evening/index.html)

[^7]: Julia Evans, [Get better at programming by learning how things work](https://jvns.ca/blog/learn-how-things-work/)

[^8]: Peter Norvig, [pytudes](https://github.com/norvig/pytudes)

[^9]: Peter Norvig, [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html)

[^10]:  Erik Dietrich, [How Developers Stop Learning: Rise of the Expert Beginner](https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/)
