var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Section-1-1",
  "level": "1",
  "url": "Section-1-1.html",
  "type": "Section",
  "number": "",
  "title": "1.1 Systems of Linear Equations",
  "body": " 1.1 Systems of Linear Equations   1.1 Systems of Linear Equations    Topics and Objectives   Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions     Goals   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.      A Single Linear Equation  A linear equation has the form: where, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).   Some Examples:  is a line in two dimensions.  is a plane in three dimensions.      Non Examples:           Systems of Linear Equations  When we have more than one linear equation, we have a system of linear equations . For example, a system of two linear equations is:       Solution to a Linear System  The set of all possible values of that satisfy every equation in the system is the solution, or solution set, to the system.     Consider finding solutions to the system given above . At this point, we don't have a great way of determining the solutions to a system of linear equations. We can try guessing some solutions.  Try : Note this points makes the first equation true since , but it does not make the second equation true since . Therefore, is not a solution to the system.  Try : Note plugging this point into the first equation yields which is a true statement. Plugging the point into the second equation yields which is also a true statement. Since the point makes both equations true, it is a solution to the system.  Can you find any more solutions?      How many solutions can a system have?     Two-Dimensional Case    Consider the following systems of two linear equations in two variables and determine how many solutions there are for each.        Graphing the two lines gives the following:  Two lines in the plane with a single point of intersection.   Cartesian axes with two lines, showing where they intersect.  The graph of the lines (in red) and (in blue), showing their intersection point at     We see that the lines only intersect at , so this is the only solution to the system.         Graphing the two lines gives the following:  Two parallel lines in the plane.   Cartesian axes with two parallel lines.  The graph of the lines (in red) and (in blue)    We see that the lines are parallel, so they never intersect. Therefore, there is no solution to the system.         Graphing the two lines gives the following:  Two lines lying on top of one another.   Cartesian axes with two parallel lines.  The graph of the lines (in red) and (in blue)    The two linear equations give the same line. Therefore, there are infinitely many points that satisfy both equations, any point that is on the line.     Conclusion: A system of linear equations in two variables can have solutions.   zero, one, or infinitely many         Three-Dimensional Case  A linear equation in three variables, , defines a plane in .    How many solutions can a system of two linear equations in three variables have?    Play around with drawing two planes in 3-space and seeing how they intersect. Can they never intersect? What about intersect in a finite number of points? What about intersect in infinitely many points?      How many solutions can a system of three linear equations in three variables have?    Play around with drawing three planes in 3-space and seeing how they intersect. Can they never intersect? What about intersect in a finite number of points? What about intersect in infinitely many points?     Conclusion: Every system of linear equations, no matter the number of equations and number of variables has solutions.  zero, one, or infinitely many        Row Reduction by Elementary Row Operations  As we saw in the previous examples, one way to solve a system of linear equations is by graphing. This is not practical for most examples, especially if we are working with four or more varialbes. A more useful approach to solving a linear system is to manipulate the equations through the use of row operations .    Replacement\/Addition: add a multiple of one row to another.  Interchange: swap two rows.  Scaling: multiply a row by a nonzero scalar.       Example of Row Reduction   Apply row operations to systematically simplify the system below to an equivalent (easier to read) form in order to more easily identify the solution(s).    We will simplify the system using appropriate row operations. I am going to go ahead and use augmented matrices since that is what we will do from here on out.     Therefore, we have that the only solution is .        Augmented Matrices  It’s redundant to write variables repeatedly, so we use a augmented matrix to simplify the notation for the system. For example, the previous system Can be writen as the augmented matrix The vertical bar separates the coefficient matrix (for ) from the constants.    Determine if the following system has a solution.    Note the following:     Note that the final row suggests that which is impossible, no matter the choice of . Therefore, there is no solution. So the system is inconsistent.        Consistent Systems and Row Equivalence   Consistent  A linear system is consistent if it has at least one solution . Otherwise, it is inconsistent .     Row Equivalence  Two matrices are row equivalent if a sequence of row operations transforms one matrix into the other.     Note : If the augmented matrices of two linear systems are row equivalent, they have the same solution set.    Fundamental Questions : Two questions that we will revisit many times throughout the course:  Does a given linear system have a solution? In other words, is it consistent?  If it is consistent, is the solution unique?      "
},
{
  "id": "section-1-1-sol-2-2",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-2-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions   "
},
{
  "id": "section-1-1-sol-2-3",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-2-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.   "
},
{
  "id": "section-1-1-sol-2-5",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-2-5",
  "type": "Definition",
  "number": "1.1",
  "title": "A Single Linear Equation.",
  "body": " A Single Linear Equation  A linear equation has the form: where, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).  "
},
{
  "id": "section-1-1-sol-3-4",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution, or solution set, "
},
{
  "id": "section-1-1-sol-4-2",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-4-2",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "  Consider the following systems of two linear equations in two variables and determine how many solutions there are for each.        Graphing the two lines gives the following:  Two lines in the plane with a single point of intersection.   Cartesian axes with two lines, showing where they intersect.  The graph of the lines (in red) and (in blue), showing their intersection point at     We see that the lines only intersect at , so this is the only solution to the system.         Graphing the two lines gives the following:  Two parallel lines in the plane.   Cartesian axes with two parallel lines.  The graph of the lines (in red) and (in blue)    We see that the lines are parallel, so they never intersect. Therefore, there is no solution to the system.         Graphing the two lines gives the following:  Two lines lying on top of one another.   Cartesian axes with two parallel lines.  The graph of the lines (in red) and (in blue)    The two linear equations give the same line. Therefore, there are infinitely many points that satisfy both equations, any point that is on the line.     Conclusion: A system of linear equations in two variables can have solutions.   zero, one, or infinitely many    "
},
{
  "id": "section-1-1-sol-5-3",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-5-3",
  "type": "Example",
  "number": "1.7",
  "title": "",
  "body": "  How many solutions can a system of two linear equations in three variables have?    Play around with drawing two planes in 3-space and seeing how they intersect. Can they never intersect? What about intersect in a finite number of points? What about intersect in infinitely many points?   "
},
{
  "id": "section-1-1-sol-5-4",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-5-4",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": "  How many solutions can a system of three linear equations in three variables have?    Play around with drawing three planes in 3-space and seeing how they intersect. Can they never intersect? What about intersect in a finite number of points? What about intersect in infinitely many points?   "
},
{
  "id": "section-1-1-sol-6-2",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row operations "
},
{
  "id": "section-1-1-sol-6-3",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Replacement\/Addition: Interchange: Scaling: "
},
{
  "id": "section-1-1-sol-7-2",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-7-2",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": " Apply row operations to systematically simplify the system below to an equivalent (easier to read) form in order to more easily identify the solution(s).    We will simplify the system using appropriate row operations. I am going to go ahead and use augmented matrices since that is what we will do from here on out.     Therefore, we have that the only solution is .   "
},
{
  "id": "section-1-1-sol-8-2",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "section-1-1-sol-8-4",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-8-4",
  "type": "Example",
  "number": "1.10",
  "title": "",
  "body": " Determine if the following system has a solution.    Note the following:     Note that the final row suggests that which is impossible, no matter the choice of . Therefore, there is no solution. So the system is inconsistent.   "
},
{
  "id": "section-1-1-sol-9-2",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-9-2",
  "type": "Definition",
  "number": "1.11",
  "title": "Consistent.",
  "body": " Consistent  A linear system is consistent if it has at least one solution . Otherwise, it is inconsistent .  "
},
{
  "id": "section-1-1-sol-9-4",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-9-4",
  "type": "Definition",
  "number": "1.12",
  "title": "Row Equivalence.",
  "body": " Row Equivalence  Two matrices are row equivalent if a sequence of row operations transforms one matrix into the other.  "
},
{
  "id": "section-1-1-sol-9-8",
  "level": "2",
  "url": "Section-1-1.html#section-1-1-sol-9-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Questions "
},
{
  "id": "Section-1-2",
  "level": "1",
  "url": "Section-1-2.html",
  "type": "Section",
  "number": "",
  "title": "1.2 Row Reduction and Echelon Forms",
  "body": " 1.2 Row Reduction and Echelon Forms    1.2 Row Reduction and Echelon Forms    Topics   Row reduction algorithm  Pivots, basic and free variables  Echelon forms, existence and uniqueness      Goals   Characterize a linear system in terms of leading entries, free variables, pivots, pivot columns, and pivot positions.  Apply the row reduction algorithm to reduce a linear system to echelon form or reduced echelon form.  Apply row reduction to compute the coefficients of a polynomial.       Echelon Form and Row Row Reduced Echelon Form   A rectangular matrix is in echelon form (REF) if:   All zero rows (if any) are at the bottom.  The first nonzero entry (or leading entry ) of a row is to the right of any leading entry in the row above it.  All entries below a leading entry are zero.   A matrix in echelon form is in row reduced echelon form (RREF) if additionally:   All leading entries equal .  Each leading entry is the only nonzero entry in its column.         Let denote a nonzero number, and denote any number.   is in REF and is in RREF.       Definitions of Pivot Position and Pivot Column     Determine whether each matrix is in RREF, REF, or neither.       REF       RREF       Neither        REF         RREF        Pivot Position and Pivot Column   A pivot position in a matrix is a location in that corresponds to a leading in the RREF of . A pivot column is a column of that contains a pivot position.        Express the matrix in row reduced echelon form and identify the pivot columns.          Therefore, we can see that the pivot columns are columns 1, 2, and 4.       Row Reduction Algorithm    Row Reduction Algorithm (Steps to RREF)  The algorithm below produces a matrix in RREF.   Step 1a: Swap the first row with a lower one so the leftmost nonzero entry is in the first row.  Step 1b: Scale the first row so that its leading entry equals .  Step 1c: Use row replacement so all entries above and below this are .  Step 2a: Swap the second row with a lower one so the leftmost nonzero entry below the first row is in the second row.  Step 2b: Scale the second row so that its leading entry equals .  Step 2c: Use row replacement so all entries above and below this are .  Continue: Repeat these steps for each subsequent row until the matrix is in RREF.       Use the algorithm above to convert the following matrix into RREF.               Pivot and Free Variables   Pivot Variables and Free Variables   Variables in a system that correspond to pivot column in the augmented matrix are called pivot variables . The other variables in the system are called free variables . This is because, if the system is consistent, then any choice of the free variables will lead to a valid solution.        Determine the pivot variables and the free variables for the system represented below.       Notice that the pivots are in columns 1, 3, and 4. So the pivot variables are . Therefore, the free variables are .       Existence and Uniqueness of Solutions  A linear system is consistent if and only if the last column of the augmented matrix does not have a pivot. Equivalently, the RREF of the augmented matrix does not contain a row of the form .  If a linear system is consistent, then:   It has a unique solution if and only if (iff) there are .  no free variables    Otherwise, it has many solutions parameterized by the free variables.  infinitely       "
},
{
  "id": "handout-1-2-sol-1-2",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-1-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Row reduction algorithm  Pivots, basic and free variables  Echelon forms, existence and uniqueness   "
},
{
  "id": "handout-1-2-sol-1-3",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-1-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize a linear system in terms of leading entries, free variables, pivots, pivot columns, and pivot positions.  Apply the row reduction algorithm to reduce a linear system to echelon form or reduced echelon form.  Apply row reduction to compute the coefficients of a polynomial.   "
},
{
  "id": "handout-1-2-sol-1-5",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-1-5",
  "type": "Definition",
  "number": "1.13",
  "title": "Echelon Form and Row Row Reduced Echelon Form.",
  "body": " Echelon Form and Row Row Reduced Echelon Form   A rectangular matrix is in echelon form (REF) if:   All zero rows (if any) are at the bottom.  The first nonzero entry (or leading entry ) of a row is to the right of any leading entry in the row above it.  All entries below a leading entry are zero.   A matrix in echelon form is in row reduced echelon form (RREF) if additionally:   All leading entries equal .  Each leading entry is the only nonzero entry in its column.    "
},
{
  "id": "handout-1-2-sol-1-7",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-1-7",
  "type": "Example",
  "number": "1.14",
  "title": "",
  "body": "  Let denote a nonzero number, and denote any number.   is in REF and is in RREF.   "
},
{
  "id": "handout-1-2-sol-2-2-2",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "    REF  "
},
{
  "id": "handout-1-2-sol-2-2-3",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-2-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "    RREF  "
},
{
  "id": "handout-1-2-sol-2-2-4",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-2-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "    Neither  "
},
{
  "id": "handout-1-2-sol-2-2-5",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-2-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "     REF   "
},
{
  "id": "handout-1-2-sol-2-2-6",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-2-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "     RREF   "
},
{
  "id": "handout-1-2-sol-2-4",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-4",
  "type": "Definition",
  "number": "1.15",
  "title": "Pivot Position and Pivot Column.",
  "body": " Pivot Position and Pivot Column   A pivot position in a matrix is a location in that corresponds to a leading in the RREF of . A pivot column is a column of that contains a pivot position.   "
},
{
  "id": "handout-1-2-sol-2-6",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-2-6",
  "type": "Example",
  "number": "1.16",
  "title": "",
  "body": "  Express the matrix in row reduced echelon form and identify the pivot columns.          Therefore, we can see that the pivot columns are columns 1, 2, and 4.   "
},
{
  "id": "handout-1-2-sol-3-4",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-3-4",
  "type": "Example",
  "number": "1.17",
  "title": "",
  "body": "  Use the algorithm above to convert the following matrix into RREF.           "
},
{
  "id": "handout-1-2-sol-4-2",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-4-2",
  "type": "Definition",
  "number": "1.18",
  "title": "Pivot Variables and Free Variables.",
  "body": " Pivot Variables and Free Variables   Variables in a system that correspond to pivot column in the augmented matrix are called pivot variables . The other variables in the system are called free variables . This is because, if the system is consistent, then any choice of the free variables will lead to a valid solution.   "
},
{
  "id": "handout-1-2-sol-4-4",
  "level": "2",
  "url": "Section-1-2.html#handout-1-2-sol-4-4",
  "type": "Example",
  "number": "1.19",
  "title": "",
  "body": "  Determine the pivot variables and the free variables for the system represented below.       Notice that the pivots are in columns 1, 3, and 4. So the pivot variables are . Therefore, the free variables are .   "
},
{
  "id": "thm-inconsistent-system",
  "level": "2",
  "url": "Section-1-2.html#thm-inconsistent-system",
  "type": "Theorem",
  "number": "1.20",
  "title": "Existence and Uniqueness of Solutions.",
  "body": " Existence and Uniqueness of Solutions  A linear system is consistent if and only if the last column of the augmented matrix does not have a pivot. Equivalently, the RREF of the augmented matrix does not contain a row of the form .  If a linear system is consistent, then:   It has a unique solution if and only if (iff) there are .  no free variables    Otherwise, it has many solutions parameterized by the free variables.  infinitely    "
},
{
  "id": "Section-1-3",
  "level": "1",
  "url": "Section-1-3.html",
  "type": "Section",
  "number": "",
  "title": "1.3 Vector Equations",
  "body": " 1.3 Vector Equations   1.3 Vector Equations   Introduction   Topics   Vectors in , and their basic properties  Linear combinations of vectors      Goals   Apply geometric and algebraic properties of vectors in to compute vector additions and scalar multiplications.  Characterize a set of vectors in terms of linear combinations , their span , and how they are related to each other geometrically.     We want to think about the algebra in linear algebra (systems of equations and their solution sets) in terms of geometry (points, lines, planes, etc.). Consider the following system. We could solve this system by graphing the lines represented by each equation and determining where they interesect.   Two lines in the plane with a single point of intersection.   Two lines intersecting in the plane in a single point.  Cartesian axes with two lines: one with positive slope (from the equation ) and one with negative slope (from ), intersecting at a point.     This geometric perspective gives better insight into properties of systems and their solution sets. To better see this, we introduce -dimensional space and the vectors that live in it.        Recall that denotes the collection of all real numbers. For a positive integer , define      When , we get , the number line.   The number line for .   A horizontal line with tick marks labeled from -3 to 3 representing the real number line.      When , we can think of as a plane. Each point is an ordered pair of real numbers: its - and -coordinates. We could also view the elements of as vectors (arrows with length and direction). It turns out, viewing them as vector is a better approach.    Sketch the point and the vector .   Cartesian plane with grid and axes.   A square grid with horizontal and vertical axes spanning from -4 to 4.       The point should be a dot at the location in the grid with -value 3 and -value 2. The vector should be a ray with tail (or starting positing) at the origin and head (or ending positing with arrow) at the point .       Vector Algebra  When we think of an element of as a vector, we commonly write it as a column:    Suppose is an arbitrary real number, written , and let   Vectors have the following properties.    Scalar Multiple:     Vector Addition:     Vectors in higher dimensions satisfy the same operations componentwise.   Some examples:   Let and   Then   If , then   Geometrically, multiplying by the scalar scales the vector by and rotates the vector about the origin by 180 degrees if .    Let and   Then   Geometrically, vector addition follows the parallelogram rule. This means that to sketch the vector , you first sketch the vector starting from the origin. Then, you sketch the vector starting from the head of . The vector is the drawn by starting at the origin and ending where ended.    Vectors with a different number of entries cannot be added together.   is not defined.         Linear Combinations and Span     Given vectors and scalars , the vector is called a linear combination of with weights .  The set of all linear combinations of is called the span of these vectors.      Any two vectors in that are not scalar multiples of one another span . Thus, any vector in can be written as a linear combination of such a pair.   Linear combinations of two nonparallel vectors spanning the plane.   A grid representing the span of two linearly independent vectors  A lightly rotated square grid with the origin and multiples\/sums of two non-parallel vectors labeled, illustrating how combinations like , , etc., tile the plane.        Examples of Linear Combinations and Span    Let and . Determine three vectors which are linear combinations of and .    The following are linear combinations and .                 So, we have that        Let and . Determine if is in .    Note that if and only if can be written as a linear combination of the vectors and ; that is, if and only if there exist so that Note that this leads to the following system of linear equations: We will determine if this system has a solution by row reducing the corresponding augmented matrix. Note that It follows that the system has the solution and . Therefore, we have that        Example: Membership in a Span  In general, any two non-parallel vectors in span a plane through the origin. Every vector in that plane is a linear combination of the two.   Two nonparallel vectors in span a plane through the origin.   A translucent plane through the origin with two nonparallel vectors drawn from the origin; coordinate axes are shown for reference.        Is in the span of and ?     Similar to , we form the augmented matrix and determine if there are any solutions. Note the following:   It follows that the system is inconsistent . Therefore, it is impossible to express as a linear combination of and . Thus, .      "
},
{
  "id": "obj-1-3-topics",
  "level": "2",
  "url": "Section-1-3.html#obj-1-3-topics",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Vectors in , and their basic properties  Linear combinations of vectors   "
},
{
  "id": "obj-1-3",
  "level": "2",
  "url": "Section-1-3.html#obj-1-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Apply geometric and algebraic properties of vectors in to compute vector additions and scalar multiplications.  Characterize a set of vectors in terms of linear combinations , their span , and how they are related to each other geometrically.   "
},
{
  "id": "fig-motivation-lines",
  "level": "2",
  "url": "Section-1-3.html#fig-motivation-lines",
  "type": "Figure",
  "number": "1.21",
  "title": "",
  "body": " Two lines in the plane with a single point of intersection.   Two lines intersecting in the plane in a single point.  Cartesian axes with two lines: one with positive slope (from the equation ) and one with negative slope (from ), intersecting at a point.    "
},
{
  "id": "Rn-2",
  "level": "2",
  "url": "Section-1-3.html#Rn-2",
  "type": "Definition",
  "number": "1.22",
  "title": "",
  "body": "  Recall that denotes the collection of all real numbers. For a positive integer , define    "
},
{
  "id": "fig-number-line",
  "level": "2",
  "url": "Section-1-3.html#fig-number-line",
  "type": "Figure",
  "number": "1.23",
  "title": "",
  "body": " The number line for .   A horizontal line with tick marks labeled from -3 to 3 representing the real number line.    "
},
{
  "id": "Rn-8",
  "level": "2",
  "url": "Section-1-3.html#Rn-8",
  "type": "Example",
  "number": "1.24",
  "title": "",
  "body": "  Sketch the point and the vector .   Cartesian plane with grid and axes.   A square grid with horizontal and vertical axes spanning from -4 to 4.       The point should be a dot at the location in the grid with -value 3 and -value 2. The vector should be a ray with tail (or starting positing) at the origin and head (or ending positing with arrow) at the point .   "
},
{
  "id": "def-linear-combination-span",
  "level": "2",
  "url": "Section-1-3.html#def-linear-combination-span",
  "type": "Definition",
  "number": "1.26",
  "title": "",
  "body": "   Given vectors and scalars , the vector is called a linear combination of with weights .  The set of all linear combinations of is called the span of these vectors.    "
},
{
  "id": "fig-grid-combos",
  "level": "2",
  "url": "Section-1-3.html#fig-grid-combos",
  "type": "Figure",
  "number": "1.27",
  "title": "",
  "body": " Linear combinations of two nonparallel vectors spanning the plane.   A grid representing the span of two linearly independent vectors  A lightly rotated square grid with the origin and multiples\/sums of two non-parallel vectors labeled, illustrating how combinations like , , etc., tile the plane.    "
},
{
  "id": "examples-2",
  "level": "2",
  "url": "Section-1-3.html#examples-2",
  "type": "Example",
  "number": "1.28",
  "title": "",
  "body": "  Let and . Determine three vectors which are linear combinations of and .    The following are linear combinations and .                 So, we have that    "
},
{
  "id": "ex-span",
  "level": "2",
  "url": "Section-1-3.html#ex-span",
  "type": "Example",
  "number": "1.29",
  "title": "",
  "body": "  Let and . Determine if is in .    Note that if and only if can be written as a linear combination of the vectors and ; that is, if and only if there exist so that Note that this leads to the following system of linear equations: We will determine if this system has a solution by row reducing the corresponding augmented matrix. Note that It follows that the system has the solution and . Therefore, we have that    "
},
{
  "id": "fig-plane-span",
  "level": "2",
  "url": "Section-1-3.html#fig-plane-span",
  "type": "Figure",
  "number": "1.30",
  "title": "",
  "body": " Two nonparallel vectors in span a plane through the origin.   A translucent plane through the origin with two nonparallel vectors drawn from the origin; coordinate axes are shown for reference.    "
},
{
  "id": "ex-span-membership",
  "level": "2",
  "url": "Section-1-3.html#ex-span-membership",
  "type": "Example",
  "number": "1.31",
  "title": "",
  "body": "  Is in the span of and ?     Similar to , we form the augmented matrix and determine if there are any solutions. Note the following:   It follows that the system is inconsistent . Therefore, it is impossible to express as a linear combination of and . Thus, .   "
},
{
  "id": "Section-1-4",
  "level": "1",
  "url": "Section-1-4.html",
  "type": "Section",
  "number": "",
  "title": "1.4 The Matrix Equation <span class=\"process-math\">\\(A \\vec{x} = \\vec{b}\\)<\/span>",
  "body": " 1.4 The Matrix Equation   1.4 The Matrix Equation    Overview   “Mathematics is the art of giving the same name to different things.”  H. Poincaré   In this section we introduce another way of expressing a linear system that we will use throughout this course.   Topics   Matrix notation for systems of equations.  The matrix product .     Goals   Compute matrix–vector products.  Express linear systems as vector equations and matrix equations.  Characterize linear systems and sets of vectors using span, linear combinations, and pivots.     Below is some math notation that will be used frequently throughout the course.     symbol  meaning     belongs to     the set of vectors with real-valued elements     the set of real-valued matrices with rows and columns     Example: the notation means that is a vector with five real-valued elements.      Linear Combinations   Matrix Vector Product as a Linear Combination   Let be an matrix with columns and let . The matrix vector product  is the following linear combination of the columns of :   In particular, lies in the span of the columns of .       Write the product below as a linear combination of column vectors.               Simplify the product below.                 Equivalent Formulations of a Linear System   Let be an matrix with columns , let , and let . The solutions to   are the same as the solutions to the vector equation   which are the same as the solutions to the linear system with augmented matrix       The Existence of Solutions for the Matrix Equation   The equation has a solution if and only if is a linear combination of the columns of .      Consistency for all and pivots   The equation is consistent for every if and only if every row of has a pivot.         For what vectors does the equation have a solution?     By , the system if and only if is a linear combination of the columns of . Therefore, we have that Unfortunately, this description of is not too informative as we do not know exactly how \"big\" that span is. (We will understand more about how \"big\" a span is when we learn about dimension in Chapter 2.)  Let's augment with and row reduce to determine if we encounter any problems. Note the following:    By , the system is consistent if and only if . This is the defining characteristic for which lead to having a solution.  We could stop now, as we have answered the question, but notice we can work with the equation to get a more explicit description for . Solving for , we see that . We can think of this single equation in three variables as a system of linear equations. With this view, we see that variable is a pivot variable (which is why we solved for it), and variables and are free variables. By free variables, we literally mean that and can take on any values in . To emphasize this, I usually set my free variables equal to other variables, typically . So, we have and . (Again, the renaming of the free variables is not necessary, but I like to do it. You are free to keep the free variables named and .)  Now, we can solve for our pivot variable in terms of the free variables. So we get . Putting this all together, we see that the vectors which make the system consistent are precisely the following: This form of our answer is called the parametric vector form which will be covered in the next section.  Note that at the beginning, we saw that had to live in the span of the columns of . Now, we have learned a more descriptive way of describing in terms of span; that is, we have that In fact, we have that This means that the original span was actually only 2-dimensional and not 3-dimensional as it at first appeared.          For what values of is the system consistent for every possible choice of vector ?     By , we see that needs to have a pivot in every row. Note that     It follows that will have a pivot in every row if and only if . Therefore, the values of which make the system consistent for every possible are .        Summary: Four Equivalent Views of a Linear System  We now have four equivalent ways of expressing linear systems.    A system of equations:     An augmented matrix:     A vector equation:     A matrix equation:     Each representation gives us a different way to think about linear systems.    "
},
{
  "id": "sec-1-4-matrix-equation-2-4",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-2-4",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Matrix notation for systems of equations.  The matrix product .   "
},
{
  "id": "sec-1-4-matrix-equation-2-5",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-2-5",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Compute matrix–vector products.  Express linear systems as vector equations and matrix equations.  Characterize linear systems and sets of vectors using span, linear combinations, and pivots.   "
},
{
  "id": "sec-1-4-matrix-equation-2-8",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-2-8",
  "type": "Table",
  "number": "1.32",
  "title": "",
  "body": "   symbol  meaning     belongs to     the set of vectors with real-valued elements     the set of real-valued matrices with rows and columns    "
},
{
  "id": "def-matrix-vector-product",
  "level": "2",
  "url": "Section-1-4.html#def-matrix-vector-product",
  "type": "Definition",
  "number": "1.33",
  "title": "Matrix Vector Product as a Linear Combination.",
  "body": " Matrix Vector Product as a Linear Combination   Let be an matrix with columns and let . The matrix vector product  is the following linear combination of the columns of :   In particular, lies in the span of the columns of .   "
},
{
  "id": "sec-1-4-matrix-equation-3-4",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-3-4",
  "type": "Example",
  "number": "1.34",
  "title": "",
  "body": "  Write the product below as a linear combination of column vectors.           "
},
{
  "id": "sec-1-4-matrix-equation-3-6",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-3-6",
  "type": "Example",
  "number": "1.35",
  "title": "",
  "body": "  Simplify the product below.           "
},
{
  "id": "thm-same-solutions",
  "level": "2",
  "url": "Section-1-4.html#thm-same-solutions",
  "type": "Theorem",
  "number": "1.36",
  "title": "Equivalent Formulations of a Linear System.",
  "body": " Equivalent Formulations of a Linear System   Let be an matrix with columns , let , and let . The solutions to   are the same as the solutions to the vector equation   which are the same as the solutions to the linear system with augmented matrix    "
},
{
  "id": "thm-existence-span",
  "level": "2",
  "url": "Section-1-4.html#thm-existence-span",
  "type": "Theorem",
  "number": "1.37",
  "title": "The Existence of Solutions for the Matrix Equation.",
  "body": " The Existence of Solutions for the Matrix Equation   The equation has a solution if and only if is a linear combination of the columns of .   "
},
{
  "id": "thm-consistency-rows-pivots",
  "level": "2",
  "url": "Section-1-4.html#thm-consistency-rows-pivots",
  "type": "Theorem",
  "number": "1.38",
  "title": "Consistency for all <span class=\"process-math\">\\(\\vec{b}\\)<\/span> and pivots.",
  "body": " Consistency for all and pivots   The equation is consistent for every if and only if every row of has a pivot.   "
},
{
  "id": "sec-1-4-matrix-equation-5-1",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-5-1",
  "type": "Example",
  "number": "1.39",
  "title": "",
  "body": "  For what vectors does the equation have a solution?     By , the system if and only if is a linear combination of the columns of . Therefore, we have that Unfortunately, this description of is not too informative as we do not know exactly how \"big\" that span is. (We will understand more about how \"big\" a span is when we learn about dimension in Chapter 2.)  Let's augment with and row reduce to determine if we encounter any problems. Note the following:    By , the system is consistent if and only if . This is the defining characteristic for which lead to having a solution.  We could stop now, as we have answered the question, but notice we can work with the equation to get a more explicit description for . Solving for , we see that . We can think of this single equation in three variables as a system of linear equations. With this view, we see that variable is a pivot variable (which is why we solved for it), and variables and are free variables. By free variables, we literally mean that and can take on any values in . To emphasize this, I usually set my free variables equal to other variables, typically . So, we have and . (Again, the renaming of the free variables is not necessary, but I like to do it. You are free to keep the free variables named and .)  Now, we can solve for our pivot variable in terms of the free variables. So we get . Putting this all together, we see that the vectors which make the system consistent are precisely the following: This form of our answer is called the parametric vector form which will be covered in the next section.  Note that at the beginning, we saw that had to live in the span of the columns of . Now, we have learned a more descriptive way of describing in terms of span; that is, we have that In fact, we have that This means that the original span was actually only 2-dimensional and not 3-dimensional as it at first appeared.   "
},
{
  "id": "sec-1-4-matrix-equation-6-1",
  "level": "2",
  "url": "Section-1-4.html#sec-1-4-matrix-equation-6-1",
  "type": "Example",
  "number": "1.40",
  "title": "",
  "body": "  For what values of is the system consistent for every possible choice of vector ?     By , we see that needs to have a pivot in every row. Note that     It follows that will have a pivot in every row if and only if . Therefore, the values of which make the system consistent for every possible are .   "
},
{
  "id": "Section-1-5",
  "level": "1",
  "url": "Section-1-5.html",
  "type": "Section",
  "number": "",
  "title": "1.5 Solution Sets of Linear Systems",
  "body": " 1.5 Solution Sets of Linear Systems   1.5 Homogeneous Systems and Parametric Vector Forms    Overview   Topics   Homogeneous systems  Parametric vector forms of solutions to linear systems     Goals   Express the solution set of a linear system in parametric vector form.  Provide a geometric interpretation of the solution set of a linear system.  Characterize homogeneous linear systems using free variables, span, pivots, linear combinations, and echelon forms.     Homogeneous Systems   Homogeneous and inhomogeneous systems   Linear systems of the form are homogeneous . Linear systems of the form (with ) are inhomogeneous .     Because homogeneous systems always have the trivial solution  , the interesting question is whether they have any nontrivial solutions.      Example 1: Homogeneous System   Identify free variables and solution set   Identify the free variables and the solution set of the homogeneous system:     Since this is a homogeneous system, we know it has the trivial solution as a solution. However, we want to find all solutions. So, let's solve the system by simplifying the augmented matrix.  Note: you do not have to form the augmented matrix and can instead row reduce since this is a homogeneous system and row operations will not affected the augmented .     Since the third column does not contain a pivot, we have that is a free variable, so we can set . Converting the second row of the RREF above into an equation and solving for yields Similarly, we can use the first row of the RREF and solve for to get   Therefore, the solutions to the system are     Writing the solution set in terms of the parameter is what is known as parametric vector form . This form gives an explicit and convenient way of writing down the solution set. It also gives insight into what is happening geometrically. Note that the vectors which satisfy the system are precisely . Since the solution set contains , we see that the solution set is a line in which passes through the origin.        Parametric Forms for Homogeneous Systems  In the previous example, we expressed the solution to the system using a vector equation. This is a parametric vector form of the solution.  In general, suppose the free variables for are . Then all solutions can be written in the form   for some vectors . This representation is called the parametric vector form of the solution set.      Example 2: Non-Homogeneous System   Parametric vector form and geometric interpretation   Write the parametric vector form of the solution and give a geometric interpretation.   (Note: the left-hand side is the same as in the homogeneous system example.)    Again, we solve the system by simplifying the augmented matrix. This time we do need to keep track of the augmented column since it is not and so row operations will affect the entries.     Thankfully, the third row had a zero in the augmented position, so our system is consistent and there is at least one solution. Notice that the entries to the left of the augmentation line are exactly the same as they were in . Therefore, assigning free variables and solving for the pivot variables is almost exactly the same as in that example. The only difference, is now we have to keep track of the nonzero constants on the right side of the augmentation line. We have that is a free variable, so we set . Solving for the pivot variables yields and   Therefore, the solutions to the system are     Again we have writen the solution set in parametric vector form. Note that the free part of the solution set, the part being scaled by , is exactly the same as for the homogeneous system . This is no coincidence. When you are working with a consistent inhomogeneous system , the solution set is exactly that of the homogenous system , except translated by a vector which is a particular solution to . So, geometrically, this solution set is the same line as in , except now the line passes through the point instead of the origin.  Note: if the inhomogeneous system is inconsistent, then there is still no solution no matter how many solutions there are to .      "
},
{
  "id": "sec-1-5-homogeneous-2-2",
  "level": "2",
  "url": "Section-1-5.html#sec-1-5-homogeneous-2-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Homogeneous systems  Parametric vector forms of solutions to linear systems   "
},
{
  "id": "sec-1-5-homogeneous-2-3",
  "level": "2",
  "url": "Section-1-5.html#sec-1-5-homogeneous-2-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Express the solution set of a linear system in parametric vector form.  Provide a geometric interpretation of the solution set of a linear system.  Characterize homogeneous linear systems using free variables, span, pivots, linear combinations, and echelon forms.   "
},
{
  "id": "def-homogeneous",
  "level": "2",
  "url": "Section-1-5.html#def-homogeneous",
  "type": "Definition",
  "number": "1.41",
  "title": "Homogeneous and inhomogeneous systems.",
  "body": " Homogeneous and inhomogeneous systems   Linear systems of the form are homogeneous . Linear systems of the form (with ) are inhomogeneous .   "
},
{
  "id": "ex-homogeneous-1",
  "level": "2",
  "url": "Section-1-5.html#ex-homogeneous-1",
  "type": "Example",
  "number": "1.42",
  "title": "Identify free variables and solution set.",
  "body": " Identify free variables and solution set   Identify the free variables and the solution set of the homogeneous system:     Since this is a homogeneous system, we know it has the trivial solution as a solution. However, we want to find all solutions. So, let's solve the system by simplifying the augmented matrix.  Note: you do not have to form the augmented matrix and can instead row reduce since this is a homogeneous system and row operations will not affected the augmented .     Since the third column does not contain a pivot, we have that is a free variable, so we can set . Converting the second row of the RREF above into an equation and solving for yields Similarly, we can use the first row of the RREF and solve for to get   Therefore, the solutions to the system are     Writing the solution set in terms of the parameter is what is known as parametric vector form . This form gives an explicit and convenient way of writing down the solution set. It also gives insight into what is happening geometrically. Note that the vectors which satisfy the system are precisely . Since the solution set contains , we see that the solution set is a line in which passes through the origin.   "
},
{
  "id": "sec-1-5-homogeneous-4-2",
  "level": "2",
  "url": "Section-1-5.html#sec-1-5-homogeneous-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric vector form "
},
{
  "id": "sec-1-5-homogeneous-4-5",
  "level": "2",
  "url": "Section-1-5.html#sec-1-5-homogeneous-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric vector form "
},
{
  "id": "ex-nonhomogeneous-1",
  "level": "2",
  "url": "Section-1-5.html#ex-nonhomogeneous-1",
  "type": "Example",
  "number": "1.43",
  "title": "Parametric vector form and geometric interpretation.",
  "body": " Parametric vector form and geometric interpretation   Write the parametric vector form of the solution and give a geometric interpretation.   (Note: the left-hand side is the same as in the homogeneous system example.)    Again, we solve the system by simplifying the augmented matrix. This time we do need to keep track of the augmented column since it is not and so row operations will affect the entries.     Thankfully, the third row had a zero in the augmented position, so our system is consistent and there is at least one solution. Notice that the entries to the left of the augmentation line are exactly the same as they were in . Therefore, assigning free variables and solving for the pivot variables is almost exactly the same as in that example. The only difference, is now we have to keep track of the nonzero constants on the right side of the augmentation line. We have that is a free variable, so we set . Solving for the pivot variables yields and   Therefore, the solutions to the system are     Again we have writen the solution set in parametric vector form. Note that the free part of the solution set, the part being scaled by , is exactly the same as for the homogeneous system . This is no coincidence. When you are working with a consistent inhomogeneous system , the solution set is exactly that of the homogenous system , except translated by a vector which is a particular solution to . So, geometrically, this solution set is the same line as in , except now the line passes through the point instead of the origin.  Note: if the inhomogeneous system is inconsistent, then there is still no solution no matter how many solutions there are to .   "
},
{
  "id": "Section-1-7",
  "level": "1",
  "url": "Section-1-7.html",
  "type": "Section",
  "number": "",
  "title": "1.7 Linear Independence",
  "body": " 1.7 Linear Independence   1.7 Linear Independence    Topics and Objectives   Topics   Linear independence  Geometric interpretation of linearly independent vectors     Goals   Characterize a set of vectors and linear systems using the concept of linear independence.  Construct dependence relations between linearly dependent vectors.      Motivating Question: What is the smallest number of vectors needed in a parametric solution to a linear system?    A set of vectors in is called linearly independent if the vector equation has only the trivial solution  . The set is said to be linearly dependent if there exist weights , not all zero , such that    Let . Then some equivalent definitions of linear independence are  only has the trivial solution.  has a pivot in every column.          For each of the following sets, determine if the set is linearly independent or linearly dependent.        We will check if the matrix having these vectors as columns has a pivot in every column. Note that Since has a pivot in every column, the system has only the trivial solution. Therefore, there is no nontrivial linear combination of the vectors which results in , so the vectors are linearly independent .           Note that Since has a free column (column 2), there must be a nontrivial solution to . Every one of these nontrivial solutions gives a nontrivial linear combination of the vectors which result in . For example, we can write all solutions to in parametric vector form as . Choosing , we see that Therefore, the vectors are linearly dependent . Note, we can solve for either of the two vectors above and rewrite it in terms of the other. For example, we have that . Rewriting one vector in terms of the others is always possible for any linearly dependent set. Now, for some linearly dependent set, you can rewrite any of the vectors in terms of the others, but for some sets, only certain vectors in the set can be rewritten in terms of the others. One thing that is true: You can always rewrite any vector that corresponds to a free column in terms of the other vectors.           Note that Since is missing a pivot in column 3, the vectors are linearly dependent . The solutions to are . Choosing , we see that . We can solve this equation for any of the vectors, so let's solve it for the second vector and show that it can be expressed as a linear combination of the other two.         Two Important Facts   Any set containing the zero vector is linearly dependent.   Consider the set . Then the following is a nontrivial linear combination of these vector which results in .       Suppose are vectors in with . Then the set is linearly dependent.   Note that the matrix is an matrix. Since , this matrix has more columns than rows. Therefore, there must be a column that doesn't contain a pivot. Thus, the vectors must be linearly dependent.        Example 1   For what values of are the vectors   linearly dependent?   Note that     We see that the second column of will correspond to a free variable if and the third column of will corresponds to a free variable if Therefore, the values of which make the vectors linear dependent are .  Let's check. If , the vectors are which are linearly dependent since If , the vectors are which are definitely linearly dependent since they are the same vector.      "
},
{
  "id": "Section-1-7-2-2-2",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-2-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Linear independence  Geometric interpretation of linearly independent vectors   "
},
{
  "id": "Section-1-7-2-2-3",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-2-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize a set of vectors and linear systems using the concept of linear independence.  Construct dependence relations between linearly dependent vectors.   "
},
{
  "id": "Section-1-7-2-2-7",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-2-7",
  "type": "Definition",
  "number": "1.44",
  "title": "",
  "body": " A set of vectors in is called linearly independent if the vector equation has only the trivial solution  . The set is said to be linearly dependent if there exist weights , not all zero , such that   "
},
{
  "id": "Section-1-7-2-3-1",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-3-1",
  "type": "Example",
  "number": "1.45",
  "title": "",
  "body": "  For each of the following sets, determine if the set is linearly independent or linearly dependent.        We will check if the matrix having these vectors as columns has a pivot in every column. Note that Since has a pivot in every column, the system has only the trivial solution. Therefore, there is no nontrivial linear combination of the vectors which results in , so the vectors are linearly independent .           Note that Since has a free column (column 2), there must be a nontrivial solution to . Every one of these nontrivial solutions gives a nontrivial linear combination of the vectors which result in . For example, we can write all solutions to in parametric vector form as . Choosing , we see that Therefore, the vectors are linearly dependent . Note, we can solve for either of the two vectors above and rewrite it in terms of the other. For example, we have that . Rewriting one vector in terms of the others is always possible for any linearly dependent set. Now, for some linearly dependent set, you can rewrite any of the vectors in terms of the others, but for some sets, only certain vectors in the set can be rewritten in terms of the others. One thing that is true: You can always rewrite any vector that corresponds to a free column in terms of the other vectors.           Note that Since is missing a pivot in column 3, the vectors are linearly dependent . The solutions to are . Choosing , we see that . We can solve this equation for any of the vectors, so let's solve it for the second vector and show that it can be expressed as a linear combination of the other two.     "
},
{
  "id": "Section-1-7-2-4-2",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-4-2",
  "type": "Theorem",
  "number": "1.46",
  "title": "",
  "body": " Any set containing the zero vector is linearly dependent.   Consider the set . Then the following is a nontrivial linear combination of these vector which results in .    "
},
{
  "id": "Section-1-7-2-4-4",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-4-4",
  "type": "Theorem",
  "number": "1.47",
  "title": "",
  "body": " Suppose are vectors in with . Then the set is linearly dependent.   Note that the matrix is an matrix. Since , this matrix has more columns than rows. Therefore, there must be a column that doesn't contain a pivot. Thus, the vectors must be linearly dependent.   "
},
{
  "id": "Section-1-7-2-5-2",
  "level": "2",
  "url": "Section-1-7.html#Section-1-7-2-5-2",
  "type": "Example",
  "number": "1.48",
  "title": "",
  "body": " For what values of are the vectors   linearly dependent?   Note that     We see that the second column of will correspond to a free variable if and the third column of will corresponds to a free variable if Therefore, the values of which make the vectors linear dependent are .  Let's check. If , the vectors are which are linearly dependent since If , the vectors are which are definitely linearly dependent since they are the same vector.   "
},
{
  "id": "Section-1-8",
  "level": "1",
  "url": "Section-1-8.html",
  "type": "Section",
  "number": "",
  "title": "1.8 An Introduction to Linear Transformations",
  "body": " 1.8 An Introduction to Linear Transformations   1.8 An Introduction to Linear Transformations    Topics and Objectives   Topics   The definition of a linear transformation.  Interpreting matrix multiplication as a linear transformation.     Goals   Construct and interpret linear transformations in (e.g., view a linear transformation as a projection or a shear).  Characterize linear transformations using:  existence and uniqueness,  domain, codomain, and range.          Let be an matrix. Define a function   A function of this form is called a matrix transformation .   The domain of is .  The codomain (or target ) of is .  The vector is the image of under .  The set of all possible images is the range of .     This yields another interpretation of the equation :   as a system of linear equations,  as an augmented matrix,  as a vector equation,  as a matrix equation,  as a linear transformation equation.       Functions from Calculus (and their graphs)  Many familiar functions have domain and codomain . For example, the sine function can be described by the rule   In calculus we often visualize a function via its graph: the horizontal axis represents the domain and the vertical axis the codomain.   Graph of function on the Cartesian plane.  Graph of on the interval with axes labeled and and a light grid.      The domain of is .  The codomain of is .  The range of is .  The image of is .    Graphing is fine when both domain and codomain are . If the domain is and the codomain is , we would need five dimensions to draw the full graph, so a geometric graph is not possible.      Example 1: Working with a Matrix Transformation    Let   Consider the matrix transformation .    Compute .   Note So, . Another way of saying this is is the image of under .     Find so that .   Note We have that Therefore, is a vector in so that .  We can check this:       Give a vector for which there is no with .  Equivalently: Give a not in the range of , i.e., not in the span of the columns of .    In order for there to be no so that , we need for the matrix equation to have no solution, or equivalenty, for the underlying linear system to be inconsistent. Let and note that Therefore, by , the system is inconsistent if and only if , or equivalently, if and only if . Thus, letting will result in there being no vectors with .         Linear Transformations and Superposition   A function is linear if for all and all scalars :  ,  .      By linearity, for any scalars and vectors ,   This is the principle of superposition . In particular, once we know , we can compute for any .    Every matrix transformation is linear.       Example 2: Geometric Actions in \\m{\\mathbb{R}^2}    Suppose . Give a brief geometric description of the action of in for each matrix.        First, we can see what does to specific vectors. Note that . Graphing the input vector and the output vector and comparing, we see that the linear transformation might have rotated the vector counterclockwise OR it may have reflected the vector about the line (this swaps the and entries) OR it may have done something else. Let's try another vector and see if it narrows down the possibilities. Note that . Again, graphing the input and output vectors and comparing, we see that rotation by counterclockwise is no longer a valid option. It does still seem that reflection about the line is possible. Let's now see how the linear transformation changes an arbitrary input. Note that . Therefore, we see that for any input vector . Thus, the linear transformation reflects vectors about the line .         Again, we can start to get an idea of how this transformation affects vectors geometrically by seeing how it acts on particular vectors. Note that . So, which makes it look like doesn't do anything. Let's try another input vector: . This time, sent our input vector to the origin. Maybe you can see what kind of geometric operation can act on the previous two vectors in such a way. If not, let's see what does to an arbitrary vector. Note that . Now, we see that is projecting vectors onto the -axis. (If you don't know what projection is, we will discuss it Chapter 6.)      for    Let's go ahead and see what does to an arbitrary vector: . Therefore, simply multiplies the input vector by . Geometrically, this results in the input vector being scaled by and rotated by if .         Example 3: Geometric Actions in \\m{\\mathbb{R}^3}   Describe the effect of on vectors in .       Feel free to start by seeing what does to particular inputs. We will go ahead and see how acts on an arbitrary vector. Note that . Note that sets the -compenent of any input vector to . Geometrically, this result in the input vector getting projected onto the -plane.         Note that . Note that negates the -compenent of any input vector. Geometrically, this result in the input vector getting reflected about the -plane.         Example 4: Building the Matrix from Basis Images    A linear transformation satisfies   What is the matrix that represents ?    We want to find so that . Let's use the given data points and the fact the is a linear transformation to determine how acts on an arbitrary vector. First, note that we can represent an arbitrary vector as a linear combination of and in the following way. . Applying the linear transformation to both sides yields . Since is a linear transfomration, we know that . Therefore, we have that Another property of linear transformations we can use is that . Thus, we have that . Subbing in the given information, we have that . Therefore, we have that is the matrix that represents .  Note: The matrix representing a linear transformation is usually not formed by simply putting the given vectors as the columns. It was in this example since we were told what did to the standard vectors . We will learn more about standard vectors and the matrix of a linear transformation in the next section.      "
},
{
  "id": "Section-1-8-2-2-2",
  "level": "2",
  "url": "Section-1-8.html#Section-1-8-2-2-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The definition of a linear transformation.  Interpreting matrix multiplication as a linear transformation.   "
},
{
  "id": "Section-1-8-2-2-3",
  "level": "2",
  "url": "Section-1-8.html#Section-1-8-2-2-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Construct and interpret linear transformations in (e.g., view a linear transformation as a projection or a shear).  Characterize linear transformations using:  existence and uniqueness,  domain, codomain, and range.      "
},
{
  "id": "Section-1-8-2-2-5",
  "level": "2",
  "url": "Section-1-8.html#Section-1-8-2-2-5",
  "type": "Definition",
  "number": "1.49",
  "title": "",
  "body": "  Let be an matrix. Define a function   A function of this form is called a matrix transformation .   The domain of is .  The codomain (or target ) of is .  The vector is the image of under .  The set of all possible images is the range of .    "
},
{
  "id": "ex-1",
  "level": "2",
  "url": "Section-1-8.html#ex-1",
  "type": "Example",
  "number": "1.50",
  "title": "",
  "body": "  Let   Consider the matrix transformation .    Compute .   Note So, . Another way of saying this is is the image of under .     Find so that .   Note We have that Therefore, is a vector in so that .  We can check this:       Give a vector for which there is no with .  Equivalently: Give a not in the range of , i.e., not in the span of the columns of .    In order for there to be no so that , we need for the matrix equation to have no solution, or equivalenty, for the underlying linear system to be inconsistent. Let and note that Therefore, by , the system is inconsistent if and only if , or equivalently, if and only if . Thus, letting will result in there being no vectors with .    "
},
{
  "id": "Section-1-8-2-5-2",
  "level": "2",
  "url": "Section-1-8.html#Section-1-8-2-5-2",
  "type": "Definition",
  "number": "1.51",
  "title": "",
  "body": " A function is linear if for all and all scalars :  ,  .    "
},
{
  "id": "Section-1-8-2-5-5",
  "level": "2",
  "url": "Section-1-8.html#Section-1-8-2-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principle of superposition "
},
{
  "id": "Section-1-8-2-5-7",
  "level": "2",
  "url": "Section-1-8.html#Section-1-8-2-5-7",
  "type": "Fact",
  "number": "1.52",
  "title": "",
  "body": " Every matrix transformation is linear.  "
},
{
  "id": "ex-2",
  "level": "2",
  "url": "Section-1-8.html#ex-2",
  "type": "Example",
  "number": "1.53",
  "title": "",
  "body": "  Suppose . Give a brief geometric description of the action of in for each matrix.        First, we can see what does to specific vectors. Note that . Graphing the input vector and the output vector and comparing, we see that the linear transformation might have rotated the vector counterclockwise OR it may have reflected the vector about the line (this swaps the and entries) OR it may have done something else. Let's try another vector and see if it narrows down the possibilities. Note that . Again, graphing the input and output vectors and comparing, we see that rotation by counterclockwise is no longer a valid option. It does still seem that reflection about the line is possible. Let's now see how the linear transformation changes an arbitrary input. Note that . Therefore, we see that for any input vector . Thus, the linear transformation reflects vectors about the line .         Again, we can start to get an idea of how this transformation affects vectors geometrically by seeing how it acts on particular vectors. Note that . So, which makes it look like doesn't do anything. Let's try another input vector: . This time, sent our input vector to the origin. Maybe you can see what kind of geometric operation can act on the previous two vectors in such a way. If not, let's see what does to an arbitrary vector. Note that . Now, we see that is projecting vectors onto the -axis. (If you don't know what projection is, we will discuss it Chapter 6.)      for    Let's go ahead and see what does to an arbitrary vector: . Therefore, simply multiplies the input vector by . Geometrically, this results in the input vector being scaled by and rotated by if .    "
},
{
  "id": "ex-3",
  "level": "2",
  "url": "Section-1-8.html#ex-3",
  "type": "Example",
  "number": "1.54",
  "title": "",
  "body": " Describe the effect of on vectors in .       Feel free to start by seeing what does to particular inputs. We will go ahead and see how acts on an arbitrary vector. Note that . Note that sets the -compenent of any input vector to . Geometrically, this result in the input vector getting projected onto the -plane.         Note that . Note that negates the -compenent of any input vector. Geometrically, this result in the input vector getting reflected about the -plane.    "
},
{
  "id": "ex-4",
  "level": "2",
  "url": "Section-1-8.html#ex-4",
  "type": "Example",
  "number": "1.55",
  "title": "",
  "body": "  A linear transformation satisfies   What is the matrix that represents ?    We want to find so that . Let's use the given data points and the fact the is a linear transformation to determine how acts on an arbitrary vector. First, note that we can represent an arbitrary vector as a linear combination of and in the following way. . Applying the linear transformation to both sides yields . Since is a linear transfomration, we know that . Therefore, we have that Another property of linear transformations we can use is that . Thus, we have that . Subbing in the given information, we have that . Therefore, we have that is the matrix that represents .  Note: The matrix representing a linear transformation is usually not formed by simply putting the given vectors as the columns. It was in this example since we were told what did to the standard vectors . We will learn more about standard vectors and the matrix of a linear transformation in the next section.   "
},
{
  "id": "Section-1-9",
  "level": "1",
  "url": "Section-1-9.html",
  "type": "Section",
  "number": "",
  "title": "1.9 More on Linear Transformations",
  "body": " 1.9 More on Linear Transformations   1.9 More on Linear Transformation   Topics and Objectives   Comic showing a humorous matrix transformation.   Image credit: https:\/\/xkcd.com\/184      Topics   The standard vectors and the standard matrix .  Two and three dimensional transformations in more detail.  Onto and one-to-one transformations.     Goals   Identify and construct linear transformations of a matrix.  Characterize linear transformations as onto and\/or one-to-one.  Solve linear systems represented as linear transformations.  Express linear transformations in other forms, such as matrix equations or vector equations.      The Standard Vectors   The standard vectors in are the vectors .  They are:   For example, in :        Properties of Standard Vectors   Note: If is an matrix with columns , then   So multiplying a matrix by gives column of .   Example   Compute:     Note that which is the second column of .      The Standard Matrix of a Linear Transformation   Let be a linear transformation. Then there is a unique matrix such that   In fact, is an matrix, and its th column is . That is,     The matrix is the standard matrix for the linear transformation .     Rotations    What is the linear transformation defined by rotates vectors counterclockwise by angle ?    Let us determine such that is rotation by degrees counterclockwise. By , we need to determine and .  First, note that is the vector in obtained by rotating the vector , which points in the direction of , by degrees counterclockwise. The resulting vector would have terminal end at the point on the unit circle whose angle is . Using trigonometry, this point is . Therefore, we have that .  Next, note that is the vector in obtained by rotating the vector , which points in the direction of , by degrees counterclockwise. The resulting vector would have terminal end at the point on the unit circle whose angle is . It follows that this terminal point is . Using the sum rule for sine and cosine, we see that this terminal point can be expressed as . Therefore, we have that .  Thus, we have that the matrix so that results in rotating the vector by degrees counterclockwise is .  Let's choose \"nice\" values of to test out our matrix .   If , then . Note that for all , so does not change any input vector . This makes sense since rotating a vector by doesn't change the vector.    If , then . Note that for all , so makes each vector point in the opposite direction. This makes sense since rotating a vector by also makes vectors point in the opposite direction.    If , then . To see if actually does rotate vectors counterclockwise by , let's calculate for some special .   pointing in the direction of : which points in the direction of    pointing in the direction of : which points in the direction of    pointing in the direction of : which points in the direction of    pointing in the direction of : which points in the direction of   These four examples provide evidence supporting that is rotating vectors counterclockwise by .        There is a long list of geometric transformations of in many linear algebra texts (reflections, rotations, contractions and expansions, shears, projections, and more). Several are included at the end of this section.     Onto Linear Transformations   Onto   A linear transformation is onto if for every there exists such that . In otherwords, a linear transformation is onto if the range of equals the codomain of .    Onto is an existence property : for any , the system has a solution (where is the standard matrix of ).  Examples   A rotation on the plane is onto.  A projection in the plane is not onto.    Onto: Equivalent Statements   For a linear transformation with standard matrix , the following are equivalent:   is onto.  The columns of span .  The matrix has a pivot in every row (equivalently, pivotal columns).        One-to-One Linear Transformations   One-to-One   A linear transformation is one-to-one if for every there is at most one (possibly none) such that .    One-to-one is a uniqueness property; it does not assert existence for all .  Examples   A rotation on the plane is one-to-one.  A projection in the plane is not one-to-one.    One-to-One: Equivalent Statements   For a linear transformation with standard matrix , the following are equivalent:   is one-to-one.  The unique solution to is .  The columns of are linearly independent.  Every column of is pivotal (equivalently, has no free variables).        Example: Complete the Matrices    Complete the matrices below by entering numbers into the missing entries so that the stated properties are satisfied. If it isn't possible, state why.      is a standard matrix for a one-to-one linear transformation.    It is not possible to make the standard matrix for a one-to-one linear transformation since doing so would require to have a pivot in every column which cannot happen since the number of pivots is at most 2 (restricted by the number of rows). In fact, it is never possible for a matrix to represent a one-to-one linear transformation. Geometrically, this means that no linear transformation from to can bo one-to-one. This should make sense to be impossible since there are more input vectors (3 dimensions worth) than output vectors (2 dimensions worth) so many input vectors will correspond to the same output vector.  In this example, no matter how you fill in the blanks, you will always have a pivot in each row of . Therefore, will definitely represent an onto linear transformation.      is a standard matrix for an onto linear transformation.    It is not possible for to represent an onto linear transformation since doing so would require to have a pivot in every row, which is not possible since can have at most 2 pivots (restricted by the number of columns). In fact, no  matrix can ever represent an onto linear transformation since the most pivots such a matrix could have is 2, which means at least one of the rows will be missing a pivot. Geometrically, this is saying that no linear transformation from to can bo onto. This should make sense to be impossible since there are fewer input vectors (2 dimensions worth) than output vectors (3 dimensions worth) so how could you cover all the codomain.  In this example, there is a way to fill in the blanks to make represent a one-to-one linear transformation, but also a way to fill in the blanks so that represents a non one-to-one linear transformation.      is a standard matrix of a linear transformation that is one-to-one and onto.    Note that in order for to represent a one-to-one linear transformation, we need to have a pivot in every column. The matrix has a pivot in every columns. Note that also has a pivot in every row, so it also represents an onto linear transformation. In fact, every square matrix that has a pivot in every column must also have a pivot in every row. Therefore, for square matrices, the matrix will either represent a linaer transformation which is both one-to-one and onto OR will represent a linear transformation that is neither one-to-one nor onto.        Define a linear transformation by   Is one-to-one? Is onto?    Note that . Thus, the matrix that represent is . Note that has a pivot in each column, but not a pivot in each row. Therefore, is a linear transformation which is one-to-one, but not onto.       Two Dimensional Examples: Reflections  Below are many examples of linear transformations from to .   Reflections Through Coordinate Axes   transformation  image of unit square  standard matrix    reflection through -axis    Unit square reflected across the horizontal axis.  Relection across        reflection through -axis     Unit square reflected across the vertical axis.  Relection across       reflection through     Unit square reflected across diagonal line passing through (0,0) and (1,1).  Reflection across .       reflection through     Unit square reflected across the diagonal line passing through (0,0) and (1,-1).  Reflection across .         Two Dimensional Examples: Contractions and Expansions   Horizontal Scaling   transformation  image of unit square  standard matrix    Horizontal contraction     Unit square compressed horizontally toward the vertical axis.  Horizontal contraction by factor with .     ,     Horizontal expansion     Unit square stretched horizontally away from the vertical axis.  Horizontal expansion by factor with .     ,     Vertical contraction     Unit square compressed vertically toward the horizontal axis.  Vertical contraction by factor with .     ,     Vertical expansion     Unit square stretched vertically away from the horizontal axis.  Vertical expansion by factor with .     ,       Two Dimensional Examples: Shearing   Horizontal Scaling   transformation  image of unit square  standard matrix    Horizontal shear (left)     Unit square sheared left by a horizontal shift.  Horizontal shear with parameter .    ,    Horizontal shear (right)     Unit square sheared right by a horizontal shift.  Horizontal shear with parameter .    ,    Vertical shear (down)     Unit square sheared downward by a vertical shift.  Vertical shear with parameter .    ,    Vertical shear (up)     Unit square sheared upward by a vertical shift.  Vertical shear with parameter .    ,      Two Dimensional Examples: Projections   Projections in the Plane   transformation  image of unit square  standard matrix    Projection onto the -axis     Unit square flattened onto the horizontal axis.  Projection onto -axis.       Projection onto the -axis     Unit square flattened onto the vertical axis.  Projection onto -axis.         "
},
{
  "id": "p-1-9-title-topics-objectives-3",
  "level": "2",
  "url": "Section-1-9.html#p-1-9-title-topics-objectives-3",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The standard vectors and the standard matrix .  Two and three dimensional transformations in more detail.  Onto and one-to-one transformations.   "
},
{
  "id": "p-1-9-title-topics-objectives-4",
  "level": "2",
  "url": "Section-1-9.html#p-1-9-title-topics-objectives-4",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Identify and construct linear transformations of a matrix.  Characterize linear transformations as onto and\/or one-to-one.  Solve linear systems represented as linear transformations.  Express linear transformations in other forms, such as matrix equations or vector equations.   "
},
{
  "id": "def-standard-vectors",
  "level": "2",
  "url": "Section-1-9.html#def-standard-vectors",
  "type": "Definition",
  "number": "1.56",
  "title": "The Standard Vectors.",
  "body": " The Standard Vectors   The standard vectors in are the vectors .  They are:   For example, in :    "
},
{
  "id": "ex-aei-column",
  "level": "2",
  "url": "Section-1-9.html#ex-aei-column",
  "type": "Example",
  "number": "1.57",
  "title": "Example.",
  "body": " Example   Compute:     Note that which is the second column of .   "
},
{
  "id": "thm-standard-matrix",
  "level": "2",
  "url": "Section-1-9.html#thm-standard-matrix",
  "type": "Theorem",
  "number": "1.58",
  "title": "The Standard Matrix of a Linear Transformation.",
  "body": " The Standard Matrix of a Linear Transformation   Let be a linear transformation. Then there is a unique matrix such that   In fact, is an matrix, and its th column is . That is,    "
},
{
  "id": "handout-section-1-9-matrix-linear-transformation-3-8",
  "level": "2",
  "url": "Section-1-9.html#handout-section-1-9-matrix-linear-transformation-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard matrix "
},
{
  "id": "ex-rotation-theta",
  "level": "2",
  "url": "Section-1-9.html#ex-rotation-theta",
  "type": "Example",
  "number": "1.59",
  "title": "",
  "body": "  What is the linear transformation defined by rotates vectors counterclockwise by angle ?    Let us determine such that is rotation by degrees counterclockwise. By , we need to determine and .  First, note that is the vector in obtained by rotating the vector , which points in the direction of , by degrees counterclockwise. The resulting vector would have terminal end at the point on the unit circle whose angle is . Using trigonometry, this point is . Therefore, we have that .  Next, note that is the vector in obtained by rotating the vector , which points in the direction of , by degrees counterclockwise. The resulting vector would have terminal end at the point on the unit circle whose angle is . It follows that this terminal point is . Using the sum rule for sine and cosine, we see that this terminal point can be expressed as . Therefore, we have that .  Thus, we have that the matrix so that results in rotating the vector by degrees counterclockwise is .  Let's choose \"nice\" values of to test out our matrix .   If , then . Note that for all , so does not change any input vector . This makes sense since rotating a vector by doesn't change the vector.    If , then . Note that for all , so makes each vector point in the opposite direction. This makes sense since rotating a vector by also makes vectors point in the opposite direction.    If , then . To see if actually does rotate vectors counterclockwise by , let's calculate for some special .   pointing in the direction of : which points in the direction of    pointing in the direction of : which points in the direction of    pointing in the direction of : which points in the direction of    pointing in the direction of : which points in the direction of   These four examples provide evidence supporting that is rotating vectors counterclockwise by .      "
},
{
  "id": "def-onto",
  "level": "2",
  "url": "Section-1-9.html#def-onto",
  "type": "Definition",
  "number": "1.60",
  "title": "Onto.",
  "body": " Onto   A linear transformation is onto if for every there exists such that . In otherwords, a linear transformation is onto if the range of equals the codomain of .   "
},
{
  "id": "thm-onto-equivalences",
  "level": "2",
  "url": "Section-1-9.html#thm-onto-equivalences",
  "type": "Theorem",
  "number": "1.61",
  "title": "Onto: Equivalent Statements.",
  "body": " Onto: Equivalent Statements   For a linear transformation with standard matrix , the following are equivalent:   is onto.  The columns of span .  The matrix has a pivot in every row (equivalently, pivotal columns).    "
},
{
  "id": "def-one-to-one",
  "level": "2",
  "url": "Section-1-9.html#def-one-to-one",
  "type": "Definition",
  "number": "1.62",
  "title": "One-to-One.",
  "body": " One-to-One   A linear transformation is one-to-one if for every there is at most one (possibly none) such that .   "
},
{
  "id": "thm-one-to-one-equivalences",
  "level": "2",
  "url": "Section-1-9.html#thm-one-to-one-equivalences",
  "type": "Theorem",
  "number": "1.63",
  "title": "One-to-One: Equivalent Statements.",
  "body": " One-to-One: Equivalent Statements   For a linear transformation with standard matrix , the following are equivalent:   is one-to-one.  The unique solution to is .  The columns of are linearly independent.  Every column of is pivotal (equivalently, has no free variables).    "
},
{
  "id": "p-1-9-fill-in-matrices-2",
  "level": "2",
  "url": "Section-1-9.html#p-1-9-fill-in-matrices-2",
  "type": "Example",
  "number": "1.64",
  "title": "",
  "body": "  Complete the matrices below by entering numbers into the missing entries so that the stated properties are satisfied. If it isn't possible, state why.      is a standard matrix for a one-to-one linear transformation.    It is not possible to make the standard matrix for a one-to-one linear transformation since doing so would require to have a pivot in every column which cannot happen since the number of pivots is at most 2 (restricted by the number of rows). In fact, it is never possible for a matrix to represent a one-to-one linear transformation. Geometrically, this means that no linear transformation from to can bo one-to-one. This should make sense to be impossible since there are more input vectors (3 dimensions worth) than output vectors (2 dimensions worth) so many input vectors will correspond to the same output vector.  In this example, no matter how you fill in the blanks, you will always have a pivot in each row of . Therefore, will definitely represent an onto linear transformation.      is a standard matrix for an onto linear transformation.    It is not possible for to represent an onto linear transformation since doing so would require to have a pivot in every row, which is not possible since can have at most 2 pivots (restricted by the number of columns). In fact, no  matrix can ever represent an onto linear transformation since the most pivots such a matrix could have is 2, which means at least one of the rows will be missing a pivot. Geometrically, this is saying that no linear transformation from to can bo onto. This should make sense to be impossible since there are fewer input vectors (2 dimensions worth) than output vectors (3 dimensions worth) so how could you cover all the codomain.  In this example, there is a way to fill in the blanks to make represent a one-to-one linear transformation, but also a way to fill in the blanks so that represents a non one-to-one linear transformation.      is a standard matrix of a linear transformation that is one-to-one and onto.    Note that in order for to represent a one-to-one linear transformation, we need to have a pivot in every column. The matrix has a pivot in every columns. Note that also has a pivot in every row, so it also represents an onto linear transformation. In fact, every square matrix that has a pivot in every column must also have a pivot in every row. Therefore, for square matrices, the matrix will either represent a linaer transformation which is both one-to-one and onto OR will represent a linear transformation that is neither one-to-one nor onto.    "
},
{
  "id": "ex-linear-transform-3d-onto-oto",
  "level": "2",
  "url": "Section-1-9.html#ex-linear-transform-3d-onto-oto",
  "type": "Example",
  "number": "1.65",
  "title": "",
  "body": "  Define a linear transformation by   Is one-to-one? Is onto?    Note that . Thus, the matrix that represent is . Note that has a pivot in each column, but not a pivot in each row. Therefore, is a linear transformation which is one-to-one, but not onto.   "
},
{
  "id": "Section-2-1",
  "level": "1",
  "url": "Section-2-1.html",
  "type": "Section",
  "number": "",
  "title": "2.1 Matrix Operations",
  "body": " 2.1 Matrix Operations   2.1 Matrix Operations   Topics and Objectives   Topics   Identity and zero matrices  Matrix algebra (sums and products, scalar multiplies, matrix powers)  Transpose of a matrix     Goals    Apply matrix algebra, the matrix transpose, and the zero and identity matrices, to solve and analyze matrix equations.     Zero Matrix   A zero matrix is any matrix whose every entry is zero.      Identity Matrix   The  identity matrix has ones on the main diagonal and zeros elsewhere.      Note: Any matrix with dimensions is square . Zero matrices need not be square; identity matrices must be square.    Sums and Scalar Multiples  Suppose , and is the element of in row and column .    If and are matrices, then the elements of are .    If , then the elements of are .      If   what are the values of and ?    Note that we can use rules (a) and (b) above to combine the left expression and get the following equation: Setting corresponding entries equal to one another, we see that and .      Properties of Sums and Scalar Multiples  Scalar multiples and matrix addition have the expected properties. If are scalars and are matrices, then:          Matrix Product via Columns   Let be an matrix and be an matrix. The product is an matrix, given by     Note: The dimensions of and determine whether is defined, and what its dimensions will be.   Diagram showing how matrix dimensions match in a product.  A visual guide to when is defined based on inner dimensions.     Row-Column Rule   Row-Column Rule for Matrix Multiplication   If has rows and has columns , then each element of is        Compute the following using the row-column method.     Note that   Note that this method is faster than using the original definition of matrix multiplication given in . For example, to compute the first column of using the original definition, we would compute the following:       Properties and Warnings   Properties and Warnings  Let be matrices of sizes needed for the products to be defined, and suppose is .   Associative:   Left distributive:   Right distributive:   Identity:    Warnings:    Non-commutative: In general, .    Non-cancellation:  does not imply .    Zero divisors:  does not imply or .     The associative property is . If , then:   Schematically:    Flow diagram comparing two ways to multiply matrices.  Diagram showing two ways of getting from to , either by or by direct multiplication by .   The product can be obtained either by multiplying by , or by multiplying by and then by . This corresponds to composition of linear transformations .    Example: Non-Commutativity    Let   Give an example of a matrix such that .    Honestly, pretty much any matrix you choose at random will work. For example, let and note that , while . Therefore, .      The Transpose of a Matrix   Transpose   The transpose is the matrix whose columns are the rows of .       Compute:     We have that      Properties of Matrix Transpose                 Example: Which Operations Are Defined?    Define   Which of these operations are defined, and what are the dimensions of the result?      Note that is a matrix while is a matrix. Therefore, the sum is not defined.       First, we can use Property (d) from to write . Since is a matrix, we have that is a matrix. Since is a matrix, we have that is also a matrix. Thus, the product is the product of a matrix with a matrix with a matrix. Since all inner dimensions match, this product is defined.  Let's calculate the product. One thing to note, even though matrix multiplication is not commutative, it is associative (see ), so we can either simplify the product by either computing (mutliplying and first) or by computing (multiplying and first). I choose whichever looks easier. It follows that        Note that is a matrix, is a matrix, is a matrix, and is a matrix. Therefore, all of the inner dimensions of the product match and results in a matrix. It follows that is defined.  We will simply this expression by making use of the associative property and simplifying by first multiplying and , then multiplying the resulting matrices. Note        Matrix Powers  For any matrix and positive integer , is the product of copies of .     Compute for            Compute for     As we saw in , you cannot distribute the exponent to the individual entries in the matrix. For diagonal matrices, you actually can. Note that . Therefore, we have that . We will see an application of this to diagonalizable matrices in Section 5.3.      Additional Examples     True or False. If false, explain briefly.     Let . Then for any matrix , we have .    Recall from that the Distributive Property applies to matrix mutliplication and addition. Therefore, we start with the distributive property to simply the product. By the multiplicative property of the identity matrix, we have that and and . Recall from our properties of matrix multipliation that we are allowed to commute scalars with matrix multiplication, just not matrices with matrix multiplication. Therefore, we can factor out the and rewrite . It follows that since is the zero matrix, which doesn't change anything when you add it to a term. Therefore, we see that this statement is TRUE.      Let . For any matrices and , we have .    Proceeding in a similar manner to the problem above, we see that . We can rewrite and . Also, since matrix addition is commutative, we can move the terms and to the end. This leaves us with . Note that if , then we could combine the middle terms into . However, from the warning in , we see that matrix multiplication is often not commutative. Therefore, we cannot replace with . This leads us to believe the statement is false.  We can prove it is false by giving a counterexample. Probably, pretty much anything we try will work since matrix commutation is very rare. Let and . Note that   however,   Therefore, since for these particular matrices, the statement must be FALSE.       "
},
{
  "id": "p-2-1-overview-2",
  "level": "2",
  "url": "Section-2-1.html#p-2-1-overview-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Identity and zero matrices  Matrix algebra (sums and products, scalar multiplies, matrix powers)  Transpose of a matrix   "
},
{
  "id": "p-2-1-overview-3",
  "level": "2",
  "url": "Section-2-1.html#p-2-1-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals    Apply matrix algebra, the matrix transpose, and the zero and identity matrices, to solve and analyze matrix equations.   "
},
{
  "id": "def-zero-matrix",
  "level": "2",
  "url": "Section-2-1.html#def-zero-matrix",
  "type": "Definition",
  "number": "2.1",
  "title": "Zero Matrix.",
  "body": " Zero Matrix   A zero matrix is any matrix whose every entry is zero.    "
},
{
  "id": "def-identity-matrix",
  "level": "2",
  "url": "Section-2-1.html#def-identity-matrix",
  "type": "Definition",
  "number": "2.2",
  "title": "Identity Matrix.",
  "body": " Identity Matrix   The  identity matrix has ones on the main diagonal and zeros elsewhere.    "
},
{
  "id": "p-2-1-overview-7",
  "level": "2",
  "url": "Section-2-1.html#p-2-1-overview-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square "
},
{
  "id": "ex-sum-scalar-find-c-k",
  "level": "2",
  "url": "Section-2-1.html#ex-sum-scalar-find-c-k",
  "type": "Example",
  "number": "2.3",
  "title": "",
  "body": "  If   what are the values of and ?    Note that we can use rules (a) and (b) above to combine the left expression and get the following equation: Setting corresponding entries equal to one another, we see that and .   "
},
{
  "id": "def-matrix-multiplication-columns",
  "level": "2",
  "url": "Section-2-1.html#def-matrix-multiplication-columns",
  "type": "Definition",
  "number": "2.4",
  "title": "Matrix Product via Columns.",
  "body": " Matrix Product via Columns   Let be an matrix and be an matrix. The product is an matrix, given by    "
},
{
  "id": "thm-row-column-rule",
  "level": "2",
  "url": "Section-2-1.html#thm-row-column-rule",
  "type": "Theorem",
  "number": "2.5",
  "title": "Row-Column Rule for Matrix Multiplication.",
  "body": " Row-Column Rule for Matrix Multiplication   If has rows and has columns , then each element of is    "
},
{
  "id": "ex-row-column-compute",
  "level": "2",
  "url": "Section-2-1.html#ex-row-column-compute",
  "type": "Example",
  "number": "2.6",
  "title": "",
  "body": "  Compute the following using the row-column method.     Note that   Note that this method is faster than using the original definition of matrix multiplication given in . For example, to compute the first column of using the original definition, we would compute the following:    "
},
{
  "id": "thm-properties-multiplication",
  "level": "2",
  "url": "Section-2-1.html#thm-properties-multiplication",
  "type": "Theorem",
  "number": "2.7",
  "title": "Properties and Warnings.",
  "body": " Properties and Warnings  Let be matrices of sizes needed for the products to be defined, and suppose is .   Associative:   Left distributive:   Right distributive:   Identity:    Warnings:    Non-commutative: In general, .    Non-cancellation:  does not imply .    Zero divisors:  does not imply or .    "
},
{
  "id": "ex-noncomm-with-A",
  "level": "2",
  "url": "Section-2-1.html#ex-noncomm-with-A",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": "  Let   Give an example of a matrix such that .    Honestly, pretty much any matrix you choose at random will work. For example, let and note that , while . Therefore, .   "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "Section-2-1.html#def-transpose",
  "type": "Definition",
  "number": "2.9",
  "title": "Transpose.",
  "body": " Transpose   The transpose is the matrix whose columns are the rows of .   "
},
{
  "id": "ex-transpose-compute",
  "level": "2",
  "url": "Section-2-1.html#ex-transpose-compute",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": "  Compute:     We have that    "
},
{
  "id": "thm-transpose-properties",
  "level": "2",
  "url": "Section-2-1.html#thm-transpose-properties",
  "type": "Theorem",
  "number": "2.11",
  "title": "Properties of Matrix Transpose.",
  "body": " Properties of Matrix Transpose              "
},
{
  "id": "ex-which-operations-defined",
  "level": "2",
  "url": "Section-2-1.html#ex-which-operations-defined",
  "type": "Example",
  "number": "2.12",
  "title": "",
  "body": "  Define   Which of these operations are defined, and what are the dimensions of the result?      Note that is a matrix while is a matrix. Therefore, the sum is not defined.       First, we can use Property (d) from to write . Since is a matrix, we have that is a matrix. Since is a matrix, we have that is also a matrix. Thus, the product is the product of a matrix with a matrix with a matrix. Since all inner dimensions match, this product is defined.  Let's calculate the product. One thing to note, even though matrix multiplication is not commutative, it is associative (see ), so we can either simplify the product by either computing (mutliplying and first) or by computing (multiplying and first). I choose whichever looks easier. It follows that        Note that is a matrix, is a matrix, is a matrix, and is a matrix. Therefore, all of the inner dimensions of the product match and results in a matrix. It follows that is defined.  We will simply this expression by making use of the associative property and simplifying by first multiplying and , then multiplying the resulting matrices. Note     "
},
{
  "id": "ex-compute-a-power",
  "level": "2",
  "url": "Section-2-1.html#ex-compute-a-power",
  "type": "Example",
  "number": "2.13",
  "title": "",
  "body": "  Compute for         "
},
{
  "id": "ex-compute-c-power",
  "level": "2",
  "url": "Section-2-1.html#ex-compute-c-power",
  "type": "Example",
  "number": "2.14",
  "title": "",
  "body": "  Compute for     As we saw in , you cannot distribute the exponent to the individual entries in the matrix. For diagonal matrices, you actually can. Note that . Therefore, we have that . We will see an application of this to diagonalizable matrices in Section 5.3.   "
},
{
  "id": "ex-tf-identity-factorization",
  "level": "2",
  "url": "Section-2-1.html#ex-tf-identity-factorization",
  "type": "Example",
  "number": "2.15",
  "title": "",
  "body": "   True or False. If false, explain briefly.     Let . Then for any matrix , we have .    Recall from that the Distributive Property applies to matrix mutliplication and addition. Therefore, we start with the distributive property to simply the product. By the multiplicative property of the identity matrix, we have that and and . Recall from our properties of matrix multipliation that we are allowed to commute scalars with matrix multiplication, just not matrices with matrix multiplication. Therefore, we can factor out the and rewrite . It follows that since is the zero matrix, which doesn't change anything when you add it to a term. Therefore, we see that this statement is TRUE.      Let . For any matrices and , we have .    Proceeding in a similar manner to the problem above, we see that . We can rewrite and . Also, since matrix addition is commutative, we can move the terms and to the end. This leaves us with . Note that if , then we could combine the middle terms into . However, from the warning in , we see that matrix multiplication is often not commutative. Therefore, we cannot replace with . This leads us to believe the statement is false.  We can prove it is false by giving a counterexample. Probably, pretty much anything we try will work since matrix commutation is very rare. Let and . Note that   however,   Therefore, since for these particular matrices, the statement must be FALSE.    "
},
{
  "id": "Section-2-2",
  "level": "1",
  "url": "Section-2-2.html",
  "type": "Section",
  "number": "",
  "title": "2.2 Matrix Inverses",
  "body": " 2.2 Matrix Inverses   2.2 Matrix Inverses    Overview   Your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.   Spielberg and Crichton, Jurassic Park , 1993 film    The algorithm we introduce in this section could be used to compute the inverse of an matrix. At the end of the lecture we'll discuss some of the problems with our algorithm and why it can be difficult to compute a matrix inverse.   Topics   Inverse of a matrix, its algebraic properties, and its relation to solving systems of linear equations.  Elementary matrices and their role in calculating the matrix inverse.     Goals   Apply the formal definition of an inverse, and its algebraic properties, to solve and analyze linear systems.  Compute the inverse of an matrix, and use it to solve linear systems.  Construct elementary matrices.    Motivating Question : Is there a matrix such that     The Matrix Inverse   Invertible (Non-singular) Matrix   An matrix is invertible (or non-singular ) if there exists a matrix such that   If such a matrix exists, we write .     Inverse Formula for a Matrix   The matrix is invertible if and only if . In that case,     In the solution, I give a proof of this theorem. You may find it interesting to try it for yourself before looking at the full proof. The idea is to start with a matrix for fixed with . Now, let for unknown . Set and determine what the unknowns are in terms of the known . You should end up solving a system of linear equations involving 4 equations in the 4 unknowns.    Here is a proof of the above formula. (Before reading, you may want to try it yourself. Look at the hint above.)  Let for fixed with . We are looking for a matrix so that , if such a matrix exists. Since is a matrix, it has four unknown entries. Let's call them , so we have . It follows that . Since we want , we can set the corresponding entries equal to arrive at the following system of linear equation: Note that we cannot have both and be zero, or else . Therefore, we can assume that at least one of them is nonzero, so let's suppose . Converting this into an augmented matrix and performing some row operations, we obtain Solving for , we see that . Solving for , we see that Solving for , we see that Lastly, solving for , we see that . It follows that .      Find the inverse of the matrix below. Check that it truly is the inverse.     First, note that , so is invertible. Using the formula, we have that . We can check this by verifying that or by verifying . Note that       Inverse and Solving Linear Systems   Inverse and Unique Solutions   A matrix has an inverse if and only if for every , the system has a unique solution. In this case,     Here is a proof of this theorem. If is invertible, then we can multiply both sides of the matrix equation by on the left to obtain the following:        Solve the linear system.     We can write the system as the following matrix equation . Since , the matrix is invertible. Using , we have Therefore, we find that the solution to the system is . Like always, it's a good idea to check that is a solution to the system.      Properties of the Matrix Inverse  Let and be invertible matrices.   (non-commutative!)       True or false: .    Note that . Therefore, the statement is true.      An Algorithm for Computing  If and , we can compute with the following algorithm:  Row reduce the augmented matrix .  If the reduction has the form , then is invertible and . Otherwise, is not invertible.      Compute the inverse of     Note the following:   Therefore, we have . Let's check: .      Why Does This Work?  Why does the previous algorithm work? We can think of our algorithm as simultaneously solving linear systems:   Each column of is .    Elementary Matrices  We can also justify the algorithm by using elementary matrices.   Elementary Matrix   An elementary matrix  is one that differs from by exactly one elementary row operation.    Recall the elementary row operations:   Swap rows  Multiply a row by a non-zero scalar  Add a multiple of one row to another   Each operation can be represented by matrix multiplication using an elementary matrix .   Let . For (a), note that multiplication by on the left swaps the rows of : . For (b), consider the matrix which was chosen by performing the row operation to the identity matrix. Note that multiplication by to the left of will accomplish the same row operation to : . For (c), consider the matrix which was chosen by performing the row operation to the identity matrix. Note that multiplication by to the left of will accomplish the same row operation to : .     Example: Identify an Elementary Matrix   Example   Suppose   By inspection, what is ? How does it compare to ?    Note that . Therefore, we have that .    Returning to why the algorithm works, applying a sequence of row operations to to obtain can be written as:   Thus, is the inverse matrix we seek.   Invertibility and Row Equivalence   A matrix is invertible if and only if it is row equivalent to the identity matrix. In this case, any sequence of elementary row operations that transforms into , when applied to , generates .      Using the Inverse to Solve a Linear System  Some final thoughts:   We could use to solve a linear system . We would compute and then solve by multiplying appropriately.  As many textbooks point out, is seldom used in practice: computing it can take a long time and may be prone to numerical error.  So why did we learn how to compute ? Later in the course, we use elementary matrices and properties of to derive results.  A recurring theme: just because we can do something a certain way, doesn't mean we should .     "
},
{
  "id": "obj-2-2-topics-goals",
  "level": "2",
  "url": "Section-2-2.html#obj-2-2-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Inverse of a matrix, its algebraic properties, and its relation to solving systems of linear equations.  Elementary matrices and their role in calculating the matrix inverse.   "
},
{
  "id": "p-2-2-intro-objectives-5",
  "level": "2",
  "url": "Section-2-2.html#p-2-2-intro-objectives-5",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Apply the formal definition of an inverse, and its algebraic properties, to solve and analyze linear systems.  Compute the inverse of an matrix, and use it to solve linear systems.  Construct elementary matrices.   "
},
{
  "id": "def-invertible",
  "level": "2",
  "url": "Section-2-2.html#def-invertible",
  "type": "Definition",
  "number": "2.16",
  "title": "Invertible (Non-singular) Matrix.",
  "body": " Invertible (Non-singular) Matrix   An matrix is invertible (or non-singular ) if there exists a matrix such that   If such a matrix exists, we write .   "
},
{
  "id": "thm-inverse-2x2-formula",
  "level": "2",
  "url": "Section-2-2.html#thm-inverse-2x2-formula",
  "type": "Theorem",
  "number": "2.17",
  "title": "Inverse Formula for a <span class=\"process-math\">\\(2\\times 2\\)<\/span> Matrix.",
  "body": " Inverse Formula for a Matrix   The matrix is invertible if and only if . In that case,     In the solution, I give a proof of this theorem. You may find it interesting to try it for yourself before looking at the full proof. The idea is to start with a matrix for fixed with . Now, let for unknown . Set and determine what the unknowns are in terms of the known . You should end up solving a system of linear equations involving 4 equations in the 4 unknowns.    Here is a proof of the above formula. (Before reading, you may want to try it yourself. Look at the hint above.)  Let for fixed with . We are looking for a matrix so that , if such a matrix exists. Since is a matrix, it has four unknown entries. Let's call them , so we have . It follows that . Since we want , we can set the corresponding entries equal to arrive at the following system of linear equation: Note that we cannot have both and be zero, or else . Therefore, we can assume that at least one of them is nonzero, so let's suppose . Converting this into an augmented matrix and performing some row operations, we obtain Solving for , we see that . Solving for , we see that Solving for , we see that Lastly, solving for , we see that . It follows that .   "
},
{
  "id": "ex-inverse-2x2",
  "level": "2",
  "url": "Section-2-2.html#ex-inverse-2x2",
  "type": "Example",
  "number": "2.18",
  "title": "",
  "body": "  Find the inverse of the matrix below. Check that it truly is the inverse.     First, note that , so is invertible. Using the formula, we have that . We can check this by verifying that or by verifying . Note that    "
},
{
  "id": "thm-inverse-iff-unique-solution",
  "level": "2",
  "url": "Section-2-2.html#thm-inverse-iff-unique-solution",
  "type": "Theorem",
  "number": "2.19",
  "title": "Inverse and Unique Solutions.",
  "body": " Inverse and Unique Solutions   A matrix has an inverse if and only if for every , the system has a unique solution. In this case,     Here is a proof of this theorem. If is invertible, then we can multiply both sides of the matrix equation by on the left to obtain the following:     "
},
{
  "id": "ex-solve-system-with-inverse",
  "level": "2",
  "url": "Section-2-2.html#ex-solve-system-with-inverse",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": "  Solve the linear system.     We can write the system as the following matrix equation . Since , the matrix is invertible. Using , we have Therefore, we find that the solution to the system is . Like always, it's a good idea to check that is a solution to the system.   "
},
{
  "id": "ex-abc-inverse-order",
  "level": "2",
  "url": "Section-2-2.html#ex-abc-inverse-order",
  "type": "Example",
  "number": "2.21",
  "title": "",
  "body": "  True or false: .    Note that . Therefore, the statement is true.   "
},
{
  "id": "ex-compute-inverse-3x3",
  "level": "2",
  "url": "Section-2-2.html#ex-compute-inverse-3x3",
  "type": "Example",
  "number": "2.22",
  "title": "",
  "body": "  Compute the inverse of     Note the following:   Therefore, we have . Let's check: .   "
},
{
  "id": "def-elementary-matrix",
  "level": "2",
  "url": "Section-2-2.html#def-elementary-matrix",
  "type": "Definition",
  "number": "2.23",
  "title": "Elementary Matrix.",
  "body": " Elementary Matrix   An elementary matrix  is one that differs from by exactly one elementary row operation.   "
},
{
  "id": "p-2-2-elementary-matrices-6",
  "level": "2",
  "url": "Section-2-2.html#p-2-2-elementary-matrices-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary matrix "
},
{
  "id": "ex-find-E-by-inspection",
  "level": "2",
  "url": "Section-2-2.html#ex-find-E-by-inspection",
  "type": "Example",
  "number": "2.24",
  "title": "Example.",
  "body": " Example   Suppose   By inspection, what is ? How does it compare to ?    Note that . Therefore, we have that .   "
},
{
  "id": "thm-invertible-iff-row-equivalent-identity",
  "level": "2",
  "url": "Section-2-2.html#thm-invertible-iff-row-equivalent-identity",
  "type": "Theorem",
  "number": "2.25",
  "title": "Invertibility and Row Equivalence.",
  "body": " Invertibility and Row Equivalence   A matrix is invertible if and only if it is row equivalent to the identity matrix. In this case, any sequence of elementary row operations that transforms into , when applied to , generates .   "
},
{
  "id": "Section-2-3",
  "level": "1",
  "url": "Section-2-3.html",
  "type": "Section",
  "number": "",
  "title": "2.3 The Invertible Matrix Theorem",
  "body": " 2.3 The Invertible Matrix Theorem   2.3 The Invertible Matrix Theorem   Overview   A synonym is a word you use when you can't spell the other one.   Baltasar Gracián    The theorem introduced in this section provides many equivalent ways of describing the same idea. Depending on the context, some formulations will be more convenient than others.   Topics   The Invertible Matrix Theorem which is a synthesis of previously introduced concepts.     Goals   Characterize the invertibility of a matrix using the Invertible Matrix Theorem.  Construct and give examples of matrices that are or are not invertible.    Motivating Question : When is a square matrix invertible? Let me count the ways!    The Invertible Matrix Theorem  Invertible matrices enjoy a rich set of equivalent descriptions.   The Invertible Matrix Theorem (IMT)   Let be an matrix. The following statements are equivalent.   is invertible.  is row equivalent to .  has pivotal columns.  has only the trivial solution.  The columns of are linearly independent.  The linear transformation is one-to-one.  The equation has a solution for all .  The columns of span .  The linear transformation is onto.  There is an matrix such that . ( has a left inverse.)  There is an matrix such that . ( has a right inverse.)  is invertible.       Invertibility and Composition  The diagram below provides another perspective on the role of the inverse matrix.    Diagram showing a transformation undone by its inverse.  Diagram shows , transformed by multiplication by , and reversed by multiplication by .   The matrix inverse transforms back to , because   Some comments on IMT:  The Invertible Matrix Theorem divides all square matrices into two classes: invertible and non-invertible.  As the course progresses, additional equivalent conditions involving determinants, eigenvalues, and other concepts will be added.  Note that items (j) and (k) of the Invertible Matrix Theorem lead directly to the following result.     Left and Right Inverses   If and are matrices and , then both matrices are invertible, with and .        Is invertible?       If possible, fill in the missing entries so that each matrix is singular (not invertible). If it is not possible, explain why.       "
},
{
  "id": "obj-2-3-topics-goals",
  "level": "2",
  "url": "Section-2-3.html#obj-2-3-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The Invertible Matrix Theorem which is a synthesis of previously introduced concepts.   "
},
{
  "id": "p-2-3-intro-objectives-5",
  "level": "2",
  "url": "Section-2-3.html#p-2-3-intro-objectives-5",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize the invertibility of a matrix using the Invertible Matrix Theorem.  Construct and give examples of matrices that are or are not invertible.   "
},
{
  "id": "thm-invertible-matrix-theorem",
  "level": "2",
  "url": "Section-2-3.html#thm-invertible-matrix-theorem",
  "type": "Theorem",
  "number": "2.26",
  "title": "The Invertible Matrix Theorem (IMT).",
  "body": " The Invertible Matrix Theorem (IMT)   Let be an matrix. The following statements are equivalent.   is invertible.  is row equivalent to .  has pivotal columns.  has only the trivial solution.  The columns of are linearly independent.  The linear transformation is one-to-one.  The equation has a solution for all .  The columns of span .  The linear transformation is onto.  There is an matrix such that . ( has a left inverse.)  There is an matrix such that . ( has a right inverse.)  is invertible.    "
},
{
  "id": "thm-left-right-inverses",
  "level": "2",
  "url": "Section-2-3.html#thm-left-right-inverses",
  "type": "Theorem",
  "number": "2.27",
  "title": "Left and Right Inverses.",
  "body": " Left and Right Inverses   If and are matrices and , then both matrices are invertible, with and .   "
},
{
  "id": "ex-check-invertible",
  "level": "2",
  "url": "Section-2-3.html#ex-check-invertible",
  "type": "Example",
  "number": "2.28",
  "title": "",
  "body": "  Is invertible?    "
},
{
  "id": "ex-matrix-completion-singular",
  "level": "2",
  "url": "Section-2-3.html#ex-matrix-completion-singular",
  "type": "Example",
  "number": "2.29",
  "title": "",
  "body": "  If possible, fill in the missing entries so that each matrix is singular (not invertible). If it is not possible, explain why.    "
},
{
  "id": "Section-2-5",
  "level": "1",
  "url": "Section-2-5.html",
  "type": "Section",
  "number": "",
  "title": "2.5 <span class=\"process-math\">\\(LU\\)<\/span> Factorization",
  "body": " 2.5 Factorization   2.5 Factorization   Overview   Topics   The factorization of a matrix.  Using factorization to solve a system.  Why the factorization works.     Goals   Compute an factorization of a matrix.  Apply factorization to solve systems of equations.  Determine whether a matrix has an factorization.    We have learned several techniques for solving the equation . We could solve using , but this requires computing the inverse of an matrix, which becomes difficult for large . Gaussian elimination is better, but still inefficient for large systems.  More efficient and numerically stable methods rely on matrix factorizations. A matrix factorization (or matrix decomposition ) is a factorization of a matrix into a product of matrices. Such factorizations help solve and reveal matrix structure. Several matrix factorizations appear throughout this course. In this section, we factor a matrix into lower and upper triangular matrices.  A rectangular matrix is upper triangular if whenever .   A rectangular matrix is lower triangular if whenever .   Can you have a matrix that is both upper and lower triangular?    The Factorization   Factorization   If is an matrix that can be row reduced to echelon form without row exchanges, then there exists matrices and such that , where   is a lower triangular matrix with ones on the diagonal.  is an echelon form of .       If is a matrix, then its LU factorization has the form:     How do we find and ? Suppose can be row reduced to echelon form without interchanging rows. Then   where the are elementary row-operation matrices. These matrices are lower triangular and invertible. For example,   Therefore:     Algorithm for Computing  To compute an LU factorization:  Reduce to an echelon form using only row replacement operations. So no row swapping or scaling.  Place entries in so that the same sequence of row operations reduce to .  Note, in MATH 1554, the only allowed row replacement operation can be written in the form . The number is what should go into the row and column of , so .    Compute the LU factorization of:         Compute the LU factorization of:       Using the Decomposition  How do we use factorization to help us solve ?  If , then the equation can be written , or equivalently, . Setting , we do the following:   Forward substitution to solve for in .  Backward substitution to solve for in .     Solve the linear system with:       "
},
{
  "id": "obj-2-5-topics-goals",
  "level": "2",
  "url": "Section-2-5.html#obj-2-5-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The factorization of a matrix.  Using factorization to solve a system.  Why the factorization works.   "
},
{
  "id": "p-2-5-intro-objectives-3",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Compute an factorization of a matrix.  Apply factorization to solve systems of equations.  Determine whether a matrix has an factorization.   "
},
{
  "id": "p-2-5-intro-objectives-5",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix factorization matrix decomposition "
},
{
  "id": "p-2-5-intro-objectives-6",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular "
},
{
  "id": "p-2-5-intro-objectives-8",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower triangular "
},
{
  "id": "thm-lu-factorization",
  "level": "2",
  "url": "Section-2-5.html#thm-lu-factorization",
  "type": "Theorem",
  "number": "2.30",
  "title": "<span class=\"process-math\">\\(LU\\)<\/span> Factorization.",
  "body": " Factorization   If is an matrix that can be row reduced to echelon form without row exchanges, then there exists matrices and such that , where   is a lower triangular matrix with ones on the diagonal.  is an echelon form of .    "
},
{
  "id": "ex-lu-form",
  "level": "2",
  "url": "Section-2-5.html#ex-lu-form",
  "type": "Example",
  "number": "2.31",
  "title": "",
  "body": "  If is a matrix, then its LU factorization has the form:    "
},
{
  "id": "ex-compute-lu",
  "level": "2",
  "url": "Section-2-5.html#ex-compute-lu",
  "type": "Example",
  "number": "2.32",
  "title": "",
  "body": "  Compute the LU factorization of:    "
},
{
  "id": "ex-compute-lu2",
  "level": "2",
  "url": "Section-2-5.html#ex-compute-lu2",
  "type": "Example",
  "number": "2.33",
  "title": "",
  "body": "  Compute the LU factorization of:    "
},
{
  "id": "ex-solve-with-lu",
  "level": "2",
  "url": "Section-2-5.html#ex-solve-with-lu",
  "type": "Example",
  "number": "2.34",
  "title": "",
  "body": "  Solve the linear system with:    "
},
{
  "id": "Section-2-8",
  "level": "1",
  "url": "Section-2-8.html",
  "type": "Section",
  "number": "",
  "title": "2.8 Subspaces",
  "body": " 2.8 Subspaces   2.8 Subspaces   Overview   Topics   Subspaces, column space, and null space.  A basis for a subspace.     Goals   Determine whether a set is a subspace.  Determine whether a vector is in a particular subspace, or find a vector in that subspace.  Construct a basis for a subspace (e.g., a basis for ).    Motivating Question : Given a matrix , what is the set of vectors for which we can solve ?    Subset of   A subset of is any collection of vectors contained in .      Subspace   A subset of is a subspace if:   for any scalar and any .  for all .     Note that scalar closure implies the zero vector must be in .     Which of the following subsets could be subspaces of ?   A graphic showing three subsets of . The first is the unit square. The second is a line through the origin. The third is a line that does not pass throught the origin.        Examples of Subspaces    For each subset of given below, determine if it is a subspace of .                                          The Column Space and Null Space  Recall that for vectors , is the subspace consisting of all linear combinations of these vectors. Not only is the span of vectors an example of a subspace of , they are the only examples of subspace of .     Every subspace of can be written as the span of a finite number of vectors; that is, if is a subspace of , then there exists vectors so that .      Column Space and Null Space   Let be an matrix.   The column space of , , is the subspace of spanned by .  The null space of , , is the subspace of consisting of all solutions to .        Is in the column space of ?        Basis    Determine whether is in .        Definition of basis and Example   Basis   A basis for a subspace is a set of linearly independent vectors in that span .       Let    Find a matrix such that .  Construct a basis for .        Example: Basis for Column Space and Null Space    Construct a basis for and .        Another Example    Let    Give an example of a vector that is in .  Give an example of a vector that is not in .  Is the zero vector in ?  Is a subspace?       "
},
{
  "id": "obj-2-8-topics-goals",
  "level": "2",
  "url": "Section-2-8.html#obj-2-8-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Subspaces, column space, and null space.  A basis for a subspace.   "
},
{
  "id": "p-2-8-objectives-3",
  "level": "2",
  "url": "Section-2-8.html#p-2-8-objectives-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Determine whether a set is a subspace.  Determine whether a vector is in a particular subspace, or find a vector in that subspace.  Construct a basis for a subspace (e.g., a basis for ).   "
},
{
  "id": "def-subset-rn",
  "level": "2",
  "url": "Section-2-8.html#def-subset-rn",
  "type": "Definition",
  "number": "2.35",
  "title": "Subset of <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>.",
  "body": " Subset of   A subset of is any collection of vectors contained in .   "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "Section-2-8.html#def-subspace",
  "type": "Definition",
  "number": "2.36",
  "title": "Subspace.",
  "body": " Subspace   A subset of is a subspace if:   for any scalar and any .  for all .    "
},
{
  "id": "ex-subspace-pictures",
  "level": "2",
  "url": "Section-2-8.html#ex-subspace-pictures",
  "type": "Example",
  "number": "2.37",
  "title": "",
  "body": "  Which of the following subsets could be subspaces of ?   A graphic showing three subsets of . The first is the unit square. The second is a line through the origin. The third is a line that does not pass throught the origin.    "
},
{
  "id": "p-2-8-subspace-examples-2",
  "level": "2",
  "url": "Section-2-8.html#p-2-8-subspace-examples-2",
  "type": "Example",
  "number": "2.38",
  "title": "",
  "body": "  For each subset of given below, determine if it is a subspace of .                                      "
},
{
  "id": "thm-subspace-are-span",
  "level": "2",
  "url": "Section-2-8.html#thm-subspace-are-span",
  "type": "Theorem",
  "number": "2.39",
  "title": "",
  "body": "  Every subspace of can be written as the span of a finite number of vectors; that is, if is a subspace of , then there exists vectors so that .   "
},
{
  "id": "def-col-null",
  "level": "2",
  "url": "Section-2-8.html#def-col-null",
  "type": "Definition",
  "number": "2.40",
  "title": "Column Space and Null Space.",
  "body": " Column Space and Null Space   Let be an matrix.   The column space of , , is the subspace of spanned by .  The null space of , , is the subspace of consisting of all solutions to .    "
},
{
  "id": "ex-colspace-membership",
  "level": "2",
  "url": "Section-2-8.html#ex-colspace-membership",
  "type": "Example",
  "number": "2.41",
  "title": "",
  "body": "  Is in the column space of ?    "
},
{
  "id": "ex-nullspace-membership",
  "level": "2",
  "url": "Section-2-8.html#ex-nullspace-membership",
  "type": "Example",
  "number": "2.42",
  "title": "",
  "body": "  Determine whether is in .    "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "Section-2-8.html#def-basis",
  "type": "Definition",
  "number": "2.43",
  "title": "Basis.",
  "body": " Basis   A basis for a subspace is a set of linearly independent vectors in that span .   "
},
{
  "id": "ex-basis-subspace",
  "level": "2",
  "url": "Section-2-8.html#ex-basis-subspace",
  "type": "Example",
  "number": "2.44",
  "title": "",
  "body": "  Let    Find a matrix such that .  Construct a basis for .    "
},
{
  "id": "ex-basis-col-null",
  "level": "2",
  "url": "Section-2-8.html#ex-basis-col-null",
  "type": "Example",
  "number": "2.45",
  "title": "",
  "body": "  Construct a basis for and .    "
},
{
  "id": "ex-V-ab-equals-zero",
  "level": "2",
  "url": "Section-2-8.html#ex-V-ab-equals-zero",
  "type": "Example",
  "number": "2.46",
  "title": "",
  "body": "  Let    Give an example of a vector that is in .  Give an example of a vector that is not in .  Is the zero vector in ?  Is a subspace?    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
