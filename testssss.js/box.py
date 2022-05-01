

#Box Stacking Problem
#Given a set of rectangular 3D boxes (cuboids), create a stack of boxes as tall as possible and return the maximum height of the stacked boxes
# A class to store a box (L × W × H)
class Box:
	def __init__(self, length, width, height):

		# constraint: width is never more than length
		self.length = length
		self.width = width
		self.height = height


# Function to generate rotations of all the boxes
def createAllRotations(boxes):

	# stores all rotations of each box
	rotations = []

	# do for each box
	for box in boxes:

		# push the original box: L × W × H
		rotations.append(box)

		# push the first rotation: max(L, H) × min(L, H) × W
		rotations.append(Box(max(box.length, box.height),
					min(box.length, box.height), box.width))

		# push the second rotation: max(W, H) × min(W, H) × L
		rotations.append(Box(max(box.width, box.height),
					min(box.width, box.height), box.length))

	return rotations


# Create a stack of boxes that is as tall as possible
def findMaxHeight(boxes):

	# base case
	if not boxes:
		return 0

	# generate rotations of each box
	rotations = createAllRotations(boxes)

	# sort the boxes in descending order of base area (L × W)
	rotations.sort(key=lambda x: x.length * x.width, reverse=True)

	# max_height[i] store the maximum possible height when the i'th box is on the top
	max_height = [0] * len(rotations)

	# fill `max_height` in a bottom-up manner
	for i in range(len(rotations)):
		for j in range(i):
			# dimensions of the lower box are each strictly larger than those
			# of the higher box
			if (rotations[i].length < rotations[j].length and
					rotations[i].width < rotations[j].width):
				max_height[i] = max(max_height[i], max_height[j])

		max_height[i] += rotations[i].height

	# return the maximum value in max_height[]
	return max(max_height)


if __name__ == '__main__':
 
    # input boxes
    boxes = [Box(4, 2, 5), Box(3, 1, 6), Box(3, 2, 1), Box(6, 3, 8)]
 
    print('The maximum height is', findMaxHeight(boxes))
	




# solution 2

##Box Stacking Problem | DP-22
#Difficulty Level : Hard
#Last Updated : 30 Jun, 2021
#You are given a set of n types of rectangular 3-D boxes, where the i^th box has height h(i), width w(i) and depth d(i) (all real numbers). You want to create a stack of boxes which is as tall as possible, but you can only stack a box on top of another box if the dimensions of the 2-D base of the lower box are each strictly larger than those of the 2-D base of the higher box. Of course, you can rotate a box so that any side functions as its base. It is also allowable to use multiple instances of the same type of box. 
##Method 1 : dynamic programming using tabulation

#1) Generate all 3 rotations of all boxes. The size of rotation array becomes 3 times the size of the original array. For simplicity, we consider width as always smaller than or equal to depth. 
#2) Sort the above generated 3n boxes in decreasing order of base area.
#3) After sorting the boxes, the problem is same as LIS with following optimal substructure property. 
#MSH(i) = Maximum possible Stack Height with box i at top of stack 
#MSH(i) = { Max ( MSH(j) ) + height(i) } where j < i and width(j) > width(i) and depth(j) > depth(i). 
#If there is no such j then MSH(i) = height(i)
#4) To get overall maximum height, we return max(MSH(i)) where 0 < i < n
#Following is the implementation of the above solution. 

#The idea is to use dynamic programming to solve this problem. We start by generating all rotations of each box. For simplicity, we can easily enforce the constraint that a box’s width is never more than the length. After generating all rotations, sort the boxes in descending order of area and then apply the LIS algorithm to get the maximum height. Let L(i) store the maximum possible height when the i'th box is on the top. Then the recurrence is:

#L(i) = height(i) + max(L(j) | j < i and block i can be put on top of block j)
#Finally, the maximum height is the maximum value in L[]. The algorithm can be implemented as follows in C++, Java, and Python:

# Dynamic Programming implementation
# of Box Stacking problem
class Box:
	
	# Representation of a box
	def __init__(self, h, w, d):
		self.h = h
		self.w = w
		self.d = d

	def __lt__(self, other):
		return self.d * self.w < other.d * other.w

def maxStackHeight(arr, n):

	# Create an array of all rotations of
	# given boxes. For example, for a box {1, 2, 3},
	# we consider three instances{{1, 2, 3},
	# {2, 1, 3}, {3, 1, 2}}
	rot = [Box(0, 0, 0) for _ in range(3 * n)]
	index = 0

	for i in range(n):

		# Copy the original box
		rot[index].h = arr[i].h
		rot[index].d = max(arr[i].d, arr[i].w)
		rot[index].w = min(arr[i].d, arr[i].w)
		index += 1

		# First rotation of the box
		rot[index].h = arr[i].w
		rot[index].d = max(arr[i].h, arr[i].d)
		rot[index].w = min(arr[i].h, arr[i].d)
		index += 1

		# Second rotation of the box
		rot[index].h = arr[i].d
		rot[index].d = max(arr[i].h, arr[i].w)
		rot[index].w = min(arr[i].h, arr[i].w)
		index += 1

	# Now the number of boxes is 3n
	n *= 3

	# Sort the array 'rot[]' in non-increasing
	# order of base area
	rot.sort(reverse = True)

	# Uncomment following two lines to print
	# all rotations
	# for i in range(n):
	#	 print(rot[i].h, 'x', rot[i].w, 'x', rot[i].d)

	# Initialize msh values for all indexes
	# msh[i] --> Maximum possible Stack Height
	# with box i on top
	msh = [0] * n

	for i in range(n):
		msh[i] = rot[i].h

	# Compute optimized msh values
	# in bottom up manner
	for i in range(1, n):
		for j in range(0, i):
			if (rot[i].w < rot[j].w and
				rot[i].d < rot[j].d):
				if msh[i] < msh[j] + rot[i].h:
					msh[i] = msh[j] + rot[i].h

	maxm = -1
	for i in range(n):
		maxm = max(maxm, msh[i])

	return maxm

# Driver Code
if __name__ == "__main__":
	arr = [Box(4, 6, 7), Box(1, 2, 3),
		Box(4, 5, 6), Box(10, 12, 32)]
	n = len(arr)
	print("The maximum possible height of stack is",
		maxStackHeight(arr, n))

# This code is contributed by vibhu4agarwal
