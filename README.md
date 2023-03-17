# Learning_JavaScript
Learn JavaScript easily with this repository designed for beginners. Follow along with step-by-step tutorials, practical examples, and interactive exercises to gain a solid foundation in JavaScript. Access recommended resources for further learning, including books, videos, and online courses. Start building your own applications today!

What are Programs?
Programs are text files that humans write. They tell computers what to do! Very often the text that we write in programs is referred to as code. People who write programs are referred to as programmers or coders. 

Programs are written in a programming language designed to be human-readable. In this way many programmers can work on the same code with a common understanding of what it's trying to accomplish!

When a program is ready to be executed by a machine, it is read line-by-line by a compiler or an interpreter. Both of these tools will translate the code into instructions a machine can run.

Parsing
Each line in a program is parsed to determine its meaning to the machine. This is done by breaking up each statement into tokens. For instance, we might have a statement:

```
const a = 4
```
This statement is broken up into the individual tokens: const, a, = and 4.

These tokens have a particular meaning to the machine depending on the syntax. Programming languages define syntax. One such programming language is JavaScript. Using JavaScript syntax, the compiler assigns a set of rules to determine the meaning of the above tokens.

It will see the keyword const and know it to be declaring a variable called a. It will recognize = as an assignment operator. Finally, it will determine that 4 is the value to be stored inside of the variable a.

A compiler will read each statement in your program, parsing it. Eventually it forms a tree-like data structure to represent your program. From this data structure it will create a series of machine instructions that can be executed directly.

In some languages, compilation creates machine code that is deployed to servers. For JavaScript, compilation happens microseconds before execution. This is referred to Just-in-Time Compilation.

Phew! 

Don't worry if some of that was confusing! It's enough to introduce these concepts for now. We'll dive into further detail in future lessons. We will explore JavaScript syntax one step at a time by writing programs in the coming lessons.

# JavaScript Functions & Operators
Hey there!  we're going to learn about JavaScript functions.

What is a function?
A function is re-usable code! With a function you can plug in different inputs and receive outputs based on the input.

 Imagine a function that adds 1 to any number you give it:
 
```
 -> function -> 
 -> function -> 
 The input is on the left of the function and the output is on the right. When we input 1, we get back 2. When we input 4, we get back 5.
```

What might this function look like in code?

```
function addOne(input) {
    return input + 1;
}
```

Conditionals
In programming it's often necessary to write code that depends on some condition to be true.

For a good example, let's imagine we're building a website! 

We want users to be sent to the dashboard only if they are logged in. Otherwise we should send them to the login page:

```
if(loggedIn) {
    // loggedIn is true
    goToDashboard();
}
else {
    // loggedIn is false
    goToLogin();
}
```

You could think of this logic as: If the user is logged in, then send them to the dashboard. If not, send them to the login page.

Our logic is branched based on the condition of whether or not the user is logged in. We can look at this from the perspective of a flow chart:

Flow Chart



# Conditionals
In programming it's often necessary to write code that depends on some condition to be true.

For a good example, let's imagine we're building a website! 

We want users to be sent to the dashboard only if they are logged in. Otherwise we should send them to the login page:

if(loggedIn) {
    // loggedIn is true
    goToDashboard();
}
else {
    // loggedIn is false
    goToLogin();
}


You could think of this logic as: If the user is logged in, then send them to the dashboard. If not, send them to the login page.

Our logic is branched based on the condition of whether or not the user is logged in. We can look at this from the perspective of a flow chart:

![image](https://user-images.githubusercontent.com/66848339/226043866-ee8dd76b-4fe2-46c3-bc83-b1841dad7b6c.png)

# Loops
Computers are super efficient at running a large number of simple tasks! As programmers we take advantage of this speed by writing programs that will repeatedly do some task until a certain condition is met.

If I wanted to scan hundreds of books for a word, it would take me a long time! We can write programs to do these kind of tasks in seconds.

Let's think about how we would tell a computer to read a bunch of books. 

First, we can tell the computer to read each book until there are no books left. Then we can tell it to read each page in the book until there are no pages left. Then each word on the page until there are no words left... Each of these can be written in what we call loops.

In pseudocode this might look a little like this:

while we have books
    read book
    while we have pages in this book
        read page
            while we have words on the page
                read word 
In a flow chart, this may look more like this:
![image](https://user-images.githubusercontent.com/66848339/226044385-97a0229a-1305-4a5b-99c4-d22cf292ce79.png)

