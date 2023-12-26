## Hash Tables

### Hash table definition

A **hash table**, also known as a hash map, is a data structure that provides efficient insertion, deletion, and retrieval of key-value pairs.

It uses a hash function to map keys to indices in an array, called the hash table.
The hash function converts the key into a unique numeric value, which is used as an index to store the corresponding value in the array.
This allows for constant-time average-case operations, making hash tables a popular choice for implementing lookup tables, caches, and dictionaries.

### How Hash Tables Work

Internally, hash tables use an array of fixed size to store key-value pairs. The size of the array is typically determined based on the expected number of elements to be stored in the hash table.

When a key-value pair is inserted into the hash table, a hash function is applied to the key to calculate the index where the value should be stored in the array. The hash function should ideally generate unique hash codes for each unique key, but collisions can occur where different keys produce the same hash code.

To handle collisions, hash tables typically use one of two common strategies: chaining or open addressing.

**Chaining**: In this strategy, each array element (also known as a bucket) contains a linked list or another data structure that can store multiple key-value pairs. When a collision occurs, the new key-value pair is simply added to the linked list or data structure at the corresponding bucket.

**Open addressing**: In this strategy, if a collision occurs, an alternative empty slot in the array is found by applying additional hash functions or using a predefined probing sequence. The key-value pair is then stored in the empty slot. This strategy requires careful handling of deletions and requires the array to be periodically resized if it becomes too full.

To retrieve a value based on a key, the hash function is applied to the key to calculate the index, and the corresponding bucket is accessed. In the case of chaining, the linked list or data structure in the bucket is traversed to find the value associated with the key. In the case of open addressing, additional hash functions or the probing sequence is used to locate the key-value pair in the array.

### Hash Function

A hashing function, also known as a hash function, is a mathematical function that takes an input (or "key") and produces a fixed-size output value, typically a hash code or hash value. The primary purpose of a hashing function is to quickly and efficiently map data of arbitrary size to a fixed-size value.

Here are some key characteristics and properties of a hashing function:

1. **Deterministic**: A hashing function always produces the same output for the same input. This property is crucial for consistency in hash-based operations.

2. **Fixed output size**: A hashing function produces a fixed-size output, regardless of the size of the input. This allows the hash code to be used as an index or identifier in data structures like hash tables.

3. **Uniformity**: A good hashing function aims to distribute the hash codes uniformly across the range of possible hash values. This reduces the likelihood of collisions, where different inputs produce the same hash code.

4. **Efficiency**: Hashing functions should be computationally efficient, providing fast computation of hash codes for both small and large inputs.

5. **Avalanche effect**: A small change in the input should produce a significantly different hash code. This property ensures that similar inputs produce distinct hash codes, reducing collisions and improving the distribution of hash values.

6. **Non-invertibility**: A hashing function is designed to be one-way, meaning it should be computationally infeasible to reconstruct the original input from the hash code. This property is important for security and data integrity.

Hashing functions are widely used in various applications, such as data indexing, data integrity verification, password storage, cryptography, and more. Different hashing algorithms exist, each with its own trade-offs in terms of speed, security, and collision resistance. Common hashing algorithms include MD5, SHA-1, SHA-256, and MurmurHash, among others.

### Collisions

A **collision occurs when two different inputs produce the same hash code or hash value as the output**. In other words, collisions happen when two distinct keys are mapped to the same index or bucket in a hash table.

Collisions are an inherent possibility in hash functions due to the fact that the input domain (the set of all possible inputs) is typically much larger than the output range (the set of all possible hash codes). This is known as the pigeonhole principle. Since there are more possible inputs than distinct hash codes, collisions become inevitable.

There are two types of collisions:

1. Direct Collision: This occurs when two different inputs map to the same index or bucket in the hash table. It happens when the hash function produces the same hash code for different keys.

2. Indirect Collision: This occurs when two different inputs produce different hash codes but end up in the same index or bucket due to the collision resolution strategy used by the hash table, such as chaining or open addressing.

Collisions can impact the performance and efficiency of hash-based data structures like hash tables. They can lead to increased lookup time as the collision resolution mechanism, such as traversing linked lists or performing additional probing, is required to find the correct value associated with a key. Therefore, choosing a good hashing function and implementing collision resolution strategies effectively are important considerations in hash-based data structures to minimize the occurrence and impact of collisions.

### Hash tables operation Big O

1. Access: T = O(1)
2. Insertion: T = O(1)
3. Deletion: T = O(1)
4. Search
   1. Search for a key: T = O(1)
   2. Search for a value: T = O(n)
5. Hash function: T = O(1)
6. Collision resolution: T = O(1)

### List of problems

1. [Tow Sum](01-two-sum/question.md), [Solution](01-two-sum/two-sum.ts)
