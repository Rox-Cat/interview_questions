# Define the function to find the maximum excellence
def find_max_excellence(n, k, likes, comments):
    # Sort the comments and likes together based on comments in descending order
    notes = sorted(zip(comments, likes), reverse=True)
    
    # Initialize variables to track the likes total and max excellence
    likes_total = 0
    max_excellence = 0
    
    # Calculate total likes for the first k notes
    for i in range(k):
        likes_total += notes[i][1]
    
    # Iterate through the notes to find the maximum excellence
    for i in range(n - k + 1):
        # Current excellence is the total likes times the k-th comment in the subarray
        current_excellence = likes_total * notes[i+k-1][0]
        max_excellence = max(max_excellence, current_excellence)
        
        # Update the total likes by adding the next note's likes and
        # subtracting the likes of the note that will be removed in the next window
        if i+k < n:
            likes_total += notes[i+k][1]
        if i+k-1 < n:
            likes_total -= notes[i][1]

    return max_excellence

# Example usage:
n, k = 4, 2
likes = [1, 2, 3, 4]
comments = [3, 4, 2, 1]

# Calculate the maximum excellence
max_excellence = find_max_excellence(n, k, likes, comments)
print(max_excellence)