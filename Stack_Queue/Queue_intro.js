/**
 * Queues FIFO (First in first out)
 * Queue are used in a lot in programming problems and interview questions
 * For example, 1. waitlist app to purchase tickets for a concert that uses queue.
 * 2. Restaurant app where users check into the restaurant to see if they can get table that uses queue.
 * 3. Uber and Lyft
 * 
 * lookup O(n)
 * enqueue(push) O(1)
 * dequeue(pop) O(1)
 * peek O(1)
 * 
 * Question 1 ) Why would you not want to use an array to build a queue?
 *  Removing the first elements then need to shift all the elements. This is very inefficient.
 */