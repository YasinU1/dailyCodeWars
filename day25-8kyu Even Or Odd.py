# function take integer and return if its even or odd
# P: integer, whole, always positive
# R: return Even or Odd

def even_or_odd(number):
    # conditional even or odd
    # % 2 == 0 
    # return Even or Odd
    if number % 2 == 0 :
        return "Even"
    else:
        return "Odd"
    


def even_or_odd(number):
    # conditional even or odd
    # % 2 == 0 
    # return Even or Odd
    return "Even" if number % 2 == 0 else "Odd"
           
    
even_or_odd(4) # even
even_or_odd(1) # Odd
even_or_odd(10) # even
