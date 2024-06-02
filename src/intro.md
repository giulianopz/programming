# Introduction

This book is just a dump of links I keep collecting as I progress as a software programmer. I use it to have a personal log of good stuff I discover while wandering about in the web.

While perusing the vast array of articles, books, videos, etc. linked, one must keep in mind that the focus of learning to code[^1] should always be on learning abstract concepts and their low-level implementation details, which underlie the tech stack used in modern software, rather than specific and ephemeral tools (e.g. libraries, frameworks, etc.):

> Modern programming is becoming complex, uninteresting, full of layers that just need to be glued. It is losing most of its beauty. In that sense, most programming is no longer art nor high engineering (most programs written at big and small corporations are trivial: coders just need to understand certain ad-hoc abstractions, and write some logic and [glue code](https://en.m.wikipedia.org/wiki/Glue_code)). Only very few programmers are facing the artistic face of programming. Only very few programmers are facing high engineering in programming. 
>> Salvatore Sanfilippo[^2]

In fact, an [application software](https://en.wikipedia.org/wiki/Application_software) usually consists of levels (or layers) of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Levels_of_abstraction), wherein each level represents a different model of the same information and processes, but with varying amounts of detail. Each relatively abstract, higher level builds on a relatively concrete, lower level, which tends to provide an increasingly granular representation.

Abstractions are useful, but all non-trivial abstractions, to some degree, are leaky[^4]. So, blindly ignoring what happens at lower levels can cause performance issues or (worst) unintended bugs which are hard to debug (e.g. inscrutable incidents in production[^5]). Solving such issues thanks to Q&A websites like Stack Overflow does not help learning what actually went wrong leaving a certain sense of frustration (a common feeling for Linux users[^6]).

Unfortunately, the enterprise software world is largely dominated by the use of [frameworks](https://en.wikipedia.org/wiki/Software_framework) (e.g. Spring vs Quarkus on the backend, Angular vs React on the frontend), an abstraction which is useful to avoid code bloat but limits the creative job of a programmer, making him just an expert user of a particular framework. These frameworks are also susceptible to be replaced by other competing frameworks, generically perceived as "innovative" for some reason. The only way to avoid to be forced to learn a framework every N years is to understand what happens behind the abstractions, which means to develop a good intuition of what happens at the hardware/software interface (*getting closer to the metal*, as the kool kids say). This is why so frequently people attempt to re-implement [from scratch](./from-scratch.md) a good piece of software to understand "how things work"[^7].

Undoubtedly, this crafting or artistic view[^8] of the act of programming implies a longer (lifelong[^9]?) and steeper learning curve than any fancy YouTube tutorial would commit to, but this is still better than getting stuck in a plateau after a brief exponential growth where developers end up acting merely as code monkeys or blue collars. Sometimes the working environment of IT companies with big moneys itself tricks you into:

> voluntarily ceasing to improve because of a belief that expert status has been reached and thus further improvement is not possible.. This opting into indefinite mediocrity is the entry into an oblique phase in skills acquisition that I will call "Expert Beginner"[^10].

In this respect, the following chapters naturally derail from application programming to [system programming](https://en.wikipedia.org/wiki/Systems_programming), and finally to hardware stuff. The last chapters mostly deal with collateral and/or enjoyable aspects of programming.

---

[^1]: Jamis Buck, [LEGOs, Play-Doh, and Programming](https://weblog.jamisbuck.org/2008/11/9/legos-play-doh-and-programming)

[^2]: [antirez](http://invece.org/)

[^3]: Joel Spolsky, [The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)

[^4]: Andrew Doss, [How Long is a Negative Timeout?](https://www.andrewdoss.dev/writing/timeouts/)

[^5]: Fabien Sanglard, [A Linux evening...](https://fabiensanglard.net/a_linux_evening/index.html)

[^6]: Julia Evans, [Get better at programming by learning how things work](https://jvns.ca/blog/learn-how-things-work/)

[^7]: Peter Norvig, [pytudes](https://github.com/norvig/pytudes)

[^8]: Peter Norvig, [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html)

[^9]:  Erik Dietrich, [How Developers Stop Learning: Rise of the Expert Beginner](https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/)
