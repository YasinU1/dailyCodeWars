# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

# array of numbers return sum of positves if none return 0
# list of integer, integers, + - ,
# return sum of +s , 0

def positive_sum(arr):
    # Your code here
    # loop through array 
    # conditional if > 0
    # add to a count
    # return count
    count = 0
    for x in arr:
        if x > 0:
            count += x
    return count


positive_sum([1,2,3]) #6
positive_sum([1,-2,3]) #4
positive_sum([]) #0
