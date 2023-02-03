# Introduction

This is a raw list of concepts, tools, books, tutorials, etc. provided with links (when available) and organized by topic, I keep collecting as I progress as a software programmer. I use it to have a personal log of the best resources I discover while wandering the web.

Ideally, these links describe a learning path to get into programming, with a strong focus on backend and Java, which is just the typical entry-point programming language for many people in enterprise software development. 

Despite all the criticism, believe it or not, the world still runs on Java 8[^1], so it makes sense to start from Java. 

On the other hand, some of these critics are well-founded[^2]. So, equally, it does make sense to have a look to [modern programming languages](./prog-languages.md) also. Especially to Go, which really seems to be the favorite in replacing Java pretty everywhere.

Altough the list is very dense, one must keep in mind that the focus of learning to code should always be on learning abstract concepts and their low-level implementation details, which underlie the tech stack used in modern programming, rather than specific and ephemeral tools (e.g. libraries, frameworks, etc.):

> Modern programming is becoming complex, uninteresting, full of layers that just need to be glued. It is losing most of its beauty. In that sense, most programming is no longer art nor high engineering (most programs written at big and small corporations are trivial: coders just need to understand certain ad-hoc abstractions, and write some logic and [glue code](https://en.m.wikipedia.org/wiki/Glue_code)). Only very few programmers are facing the artistic face of programming. Only very few programmers are facing high engineering in programming. 
>> Salvatore Sanfilippo[^3]

In fact, an [application software](https://en.wikipedia.org/wiki/Application_software) usually consists of levels (or layers) of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Levels_of_abstraction), wherein each level represents a different model of the same information and processes, but with varying amounts of detail. Each relatively abstract, higher level builds on a relatively concrete, lower level, which tends to provide an increasingly granular representation.

Abstractions are useful, but all non-trivial abstractions, to some degree, are leaky[^4]. So, blindly ignoring what happens at lower levels can cause performance issues or (worst) unintended bugs which are hard to debug (e.g. inscrutable incidents in production[^5]). Solving such issues thanks to Q&A websites like Stack Overflow does not help learning what actually went wrong leaving a certain sense of frustration (a common feeling for Linux users[^6]).

Unfortunately, the enterprise software world is largely dominated by the use of [frameworks](https://en.wikipedia.org/wiki/Software_framework) (e.g. Spring vs Quarkus on backend side, Angular vs React on frontend side), an abstraction which is useful to avoid code bloat but limits the creative job of a programmer, making him just an expert user of a particular framework. These frameworks are also susceptible to be replaced by other competing frameworks, generically perceived as "innovative" for some reason. The only way to avoid to be forced to learn a framework every N years is to understand what happens behind the abstractions, which in turn means to get a good grasp of computer architecture investigating what happens at the hardware/software interface (*getting closer to the metal*, as the cool kids say). Once learned the basics of programming, a good way to go deeper is to re-implement from scratch a good piece of software[^7].

Undoubtedly, this crafting or artistic view[^8] of the act of programming implies a longer (lifelong?) learning journey than any fancy Youtube tutorial would commit to, but this is still better than limiting oneself to the role of the [code monkey](https://en.wikipedia.org/wiki/Code_monkey). 

In this respect, this book naturally derails from application programming to [system programming](https://en.wikipedia.org/wiki/Systems_programming), to arrive at hardware programming in the last chapters.

---

[^1]: Vicki Boykis, [IT runs on Java 8](https://vickiboykis.com/2019/05/10/it-runs-on-java-8/)

[^2]: Jamis Buck, [LEGOs, Play-Doh, and Programming](https://weblog.jamisbuck.org/2008/11/9/legos-play-doh-and-programming)

[^3]: aka [antirez](http://invece.org/)

[^4]: Joel Spolsky, [The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)

[^5]: Andrew Doss, [How Long is a Negative Timeout?](https://www.andrewdoss.dev/writing/timeouts/)

[^6]: Fabien Sanglard, [A Linux evening...](https://fabiensanglard.net/a_linux_evening/index.html)

[^7]: e.g. Redis: [Build Your Own Redis with C/C++](https://build-your-own.org/redis/), [Rebuilding Redis in Ruby](https://redis.pjam.me/)

[^8]: Peter Norvig, [pytudes](https://github.com/giulianopz/pytudes)
