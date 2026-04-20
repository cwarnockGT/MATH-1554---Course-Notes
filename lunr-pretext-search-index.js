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
  "id": "def-row-equiv",
  "level": "2",
  "url": "Section-1-1.html#def-row-equiv",
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
  "id": "thm-lin-dep-too-many-vectors",
  "level": "2",
  "url": "Section-1-7.html#thm-lin-dep-too-many-vectors",
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
  "body": " 2.1 Matrix Operations   2.1 Matrix Operations   Topics and Objectives   Topics   Identity and zero matrices  Matrix algebra (sums and products, scalar multiplies, matrix powers)  Transpose of a matrix     Goals    Apply matrix algebra, the matrix transpose, and the zero and identity matrices, to solve and analyze matrix equations.      Zero Matrix   A zero matrix is any matrix whose every entry is zero.      Identity Matrix   The  identity matrix has ones on the main diagonal and zeros elsewhere.      Note: Any matrix with dimensions is square . Zero matrices need not be square; identity matrices must be square.     Sums and Scalar Multiples  Suppose , and is the element of in row and column .    If and are matrices, then the elements of are .    If , then the elements of are .      If   what are the values of and ?    Note that we can use rules (a) and (b) above to combine the left expression and get the following equation: Setting corresponding entries equal to one another, we see that and .       Properties of Sums and Scalar Multiples  Scalar multiples and matrix addition have the expected properties. If are scalars and are matrices, then:           Matrix Product via Columns   Let be an matrix and be an matrix. The product is an matrix, given by     Note: The dimensions of and determine whether is defined, and what its dimensions will be.   Diagram showing how matrix dimensions match in a product.  A visual guide to when is defined based on inner dimensions.      Row-Column Rule   Row-Column Rule for Matrix Multiplication   If has rows and has columns , then each element of is        Compute the following using the row-column method.     Note that   Note that this method is faster than using the original definition of matrix multiplication given in . For example, to compute the first column of using the original definition, we would compute the following:        Properties and Warnings   Properties and Warnings  Let be matrices of sizes needed for the products to be defined, and suppose is .   Associative:   Left distributive:   Right distributive:   Identity:    Warnings:    Non-commutative: In general, .    Non-cancellation:  does not imply .    Zero divisors:  does not imply or .      The associative property is . If , then:   Schematically:    Flow diagram comparing two ways to multiply matrices.  Diagram showing two ways of getting from to , either by or by direct multiplication by .   The product can be obtained either by multiplying by , or by multiplying by and then by . This corresponds to composition of linear transformations .     Example: Non-Commutativity    Let   Give an example of a matrix such that .    Honestly, pretty much any matrix you choose at random will work. For example, let and note that , while . Therefore, .       The Transpose of a Matrix   Transpose   The transpose  is the matrix whose columns are the rows of .       Compute:     We have that       Properties of Matrix Transpose                  Example: Which Operations Are Defined?    Define   Which of these operations are defined, and what are the dimensions of the result?      Note that is a matrix while is a matrix. Therefore, the sum is not defined.       First, we can use Property (d) from to write . Since is a matrix, we have that is a matrix. Since is a matrix, we have that is also a matrix. Thus, the product is the product of a matrix with a matrix with a matrix. Since all inner dimensions match, this product is defined.  Let's calculate the product. One thing to note, even though matrix multiplication is not commutative, it is associative (see ), so we can either simplify the product by either computing (mutliplying and first) or by computing (multiplying and first). I choose whichever looks easier. It follows that        Note that is a matrix, is a matrix, is a matrix, and is a matrix. Therefore, all of the inner dimensions of the product match and results in a matrix. It follows that is defined.  We will simply this expression by making use of the associative property and simplifying by first multiplying and , then multiplying the resulting matrices. Note         Matrix Powers  For any matrix and positive integer , is the product of copies of .     Compute for             Compute for     As we saw in , you cannot distribute the exponent to the individual entries in the matrix. For diagonal matrices, you actually can. Note that . Therefore, we have that . We will see an application of this to diagonalizable matrices in Section 5.3.       Additional Examples     True or False. If false, explain briefly.     Let . Then for any matrix , we have .    Recall from that the Distributive Property applies to matrix mutliplication and addition. Therefore, we start with the distributive property to simply the product. By the multiplicative property of the identity matrix, we have that and and . Recall from our properties of matrix multipliation that we are allowed to commute scalars with matrix multiplication, just not matrices with matrix multiplication. Therefore, we can factor out the and rewrite . It follows that since is the zero matrix, which doesn't change anything when you add it to a term. Therefore, we see that this statement is TRUE.      Let . For any matrices and , we have .    Proceeding in a similar manner to the problem above, we see that . We can rewrite and . Also, since matrix addition is commutative, we can move the terms and to the end. This leaves us with . Note that if , then we could combine the middle terms into . However, from the warning in , we see that matrix multiplication is often not commutative. Therefore, we cannot replace with . This leads us to believe the statement is false.  We can prove it is false by giving a counterexample. Probably, pretty much anything we try will work since matrix commutation is very rare. Let and . Note that   however,   Therefore, since for these particular matrices, the statement must be FALSE.       "
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
  "id": "p-2-1-overview-8",
  "level": "2",
  "url": "Section-2-1.html#p-2-1-overview-8",
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
  "body": " Transpose   The transpose  is the matrix whose columns are the rows of .   "
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
  "body": " 2.2 Matrix Inverses   2.2 Matrix Inverses    Overview   Your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.   Spielberg and Crichton, Jurassic Park , 1993 film    The algorithm we introduce in this section could be used to compute the inverse of an matrix. At the end of the lecture we'll discuss some of the problems with our algorithm and why it can be difficult to compute a matrix inverse.   Topics   Inverse of a matrix, its algebraic properties, and its relation to solving systems of linear equations.  Elementary matrices and their role in calculating the matrix inverse.     Goals   Apply the formal definition of an inverse, and its algebraic properties, to solve and analyze linear systems.  Compute the inverse of an matrix, and use it to solve linear systems.  Construct elementary matrices.     Motivating Question : Is there a matrix such that      The Matrix Inverse   Invertible (Non-singular) Matrix   An matrix is invertible (or non-singular ) if there exists a matrix such that   If such a matrix exists, we write .      Inverse Formula for a Matrix   The matrix is invertible if and only if . In that case,     In the solution, I give a proof of this theorem. You may find it interesting to try it for yourself before looking at the full proof. The idea is to start with a matrix for fixed with . Now, let for unknown . Set and determine what the unknowns are in terms of the known . You should end up solving a system of linear equations involving 4 equations in the 4 unknowns.    Here is a proof of the above formula. (Before reading, you may want to try it yourself. Look at the hint above.)  Let for fixed with . We are looking for a matrix so that , if such a matrix exists. Since is a matrix, it has four unknown entries. Let's call them , so we have . It follows that . Since we want , we can set the corresponding entries equal to arrive at the following system of linear equation: Note that we cannot have both and be zero, or else . Therefore, we can assume that at least one of them is nonzero, so let's suppose . Converting this into an augmented matrix and performing some row operations, we obtain Solving for , we see that . Solving for , we see that Solving for , we see that Lastly, solving for , we see that . It follows that .       Find the inverse of the matrix below. Check that it truly is the inverse.     First, note that , so is invertible. Using the formula, we have that . We can check this by verifying that or by verifying . Note that        Inverse and Solving Linear Systems   Inverse and Unique Solutions   A matrix has an inverse if and only if for every , the system has a unique solution. In this case,     Here is a proof of this theorem. If is invertible, then we can multiply both sides of the matrix equation by on the left to obtain the following:         Solve the linear system.     We can write the system as the following matrix equation . Since , the matrix is invertible. Using , we have Therefore, we find that the solution to the system is . Like always, it's a good idea to check that is a solution to the system.       Properties of the Matrix Inverse  Let and be invertible matrices. Then   (non-commutative!)       True or false: .    Note that . Therefore, the statement is true.       An Algorithm for Computing  If and , we can compute with the following algorithm:  Row reduce the augmented matrix .  If the reduction has the form , then is invertible and . Otherwise, is not invertible.      Compute the inverse of     Note the following:   Therefore, we have . Let's check: .       Why Does This Work?  Why does the previous algorithm work? We can think of our algorithm as simultaneously solving linear systems:   Each column of is .     Elementary Matrices  We can also justify the algorithm by using elementary matrices.   Elementary Matrix   An elementary matrix  is one that differs from by exactly one elementary row operation.    Recall the elementary row operations:   Swap rows  Multiply a row by a non-zero scalar  Add a multiple of one row to another   Each operation can be represented by matrix multiplication using an elementary matrix .   Let . For (a), note that multiplication by on the left swaps the rows of : . For (b), consider the matrix which was chosen by performing the row operation to the identity matrix. Note that multiplication by to the left of will accomplish the same row operation to : . For (c), consider the matrix which was chosen by performing the row operation to the identity matrix. Note that multiplication by to the left of will accomplish the same row operation to : .      Example: Identify an Elementary Matrix    Suppose   By inspection, what is ? How does it compare to ?    Note that . Therefore, we have that .     Returning to why the algorithm works, applying a sequence of row operations to to obtain can be written as:   Thus, is the inverse matrix we seek.    Invertibility and Row Equivalence   A matrix is invertible if and only if it is row equivalent to the identity matrix. In this case, any sequence of elementary row operations that transforms into , when applied to , generates .       Using the Inverse to Solve a Linear System  Some final thoughts:   We could use to solve a linear system . We would compute and then solve by multiplying appropriately.  As many textbooks point out, is seldom used in practice: computing it can take a long time and may be prone to numerical error.  So why did we learn how to compute ? Later in the course, we use elementary matrices and properties of to derive results.  A recurring theme: just because we can do something a certain way, doesn't mean we should .     "
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
  "title": "",
  "body": "  Suppose   By inspection, what is ? How does it compare to ?    Note that . Therefore, we have that .   "
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
  "body": " 2.3 The Invertible Matrix Theorem   2.3 The Invertible Matrix Theorem   Overview   A synonym is a word you use when you can't spell the other one.   Baltasar Gracián    The theorem introduced in this section provides many equivalent ways of describing the same idea. Depending on the context, some formulations will be more convenient than others.   Topics   The Invertible Matrix Theorem which is a synthesis of previously introduced concepts.     Goals   Characterize the invertibility of a matrix using the Invertible Matrix Theorem.  Construct and give examples of matrices that are or are not invertible.     Motivating Question : When is a square matrix invertible? Let me count the ways!     The Invertible Matrix Theorem  Invertible matrices enjoy a rich set of equivalent descriptions.   The Invertible Matrix Theorem (IMT)   Let be an matrix. The following statements are equivalent.   is invertible.  is row equivalent to .  has pivotal columns.  has only the trivial solution.  The columns of are linearly independent.  The linear transformation is one-to-one.  The equation has a solution for all .  The columns of span .  The linear transformation is onto.  There is an matrix such that . ( has a left inverse.)  There is an matrix such that . ( has a right inverse.)  is invertible.        Invertibility and Composition  The diagram below provides another perspective on the role of the inverse matrix.    Diagram showing a transformation undone by its inverse.  Diagram shows , transformed by multiplication by , and reversed by multiplication by .   The matrix inverse transforms back to , because    Some comments on IMT:  The Invertible Matrix Theorem divides all square matrices into two classes: invertible and non-invertible.  As the course progresses, additional equivalent conditions involving determinants, eigenvalues, and other concepts will be added.  Note that items (j) and (k) of the Invertible Matrix Theorem lead directly to the following result.      Left and Right Inverses   If and are matrices and , then both matrices are invertible, with and .         Is invertible?     We can use IMT to determine if is invertible by showing that either makes at least one statement in the list true or makes at least one statement in the list false. Note that . We see that has a pivot in every column. Therefore, by IMT, must make every statment on the list true. In particular, we learn that is invertible.       For each matrix below, determine all values of so that the matrix is singular (not invertible). If there are no values of , explain why.          Note that . Thus, is missing a pivot if and only if . Therefore, is the only value of which makes singular.           Note that regardless of the value of , will have a pivot in each column. Therefore, no value of will make singular.           Note that . Thus, is missing a pivot in the third row if and only if . Therefore, is the only value of which makes singular.         "
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
  "body": "  Is invertible?     We can use IMT to determine if is invertible by showing that either makes at least one statement in the list true or makes at least one statement in the list false. Note that . We see that has a pivot in every column. Therefore, by IMT, must make every statment on the list true. In particular, we learn that is invertible.   "
},
{
  "id": "ex-matrix-completion-singular",
  "level": "2",
  "url": "Section-2-3.html#ex-matrix-completion-singular",
  "type": "Example",
  "number": "2.29",
  "title": "",
  "body": "  For each matrix below, determine all values of so that the matrix is singular (not invertible). If there are no values of , explain why.          Note that . Thus, is missing a pivot if and only if . Therefore, is the only value of which makes singular.           Note that regardless of the value of , will have a pivot in each column. Therefore, no value of will make singular.           Note that . Thus, is missing a pivot in the third row if and only if . Therefore, is the only value of which makes singular.    "
},
{
  "id": "Section-2-5",
  "level": "1",
  "url": "Section-2-5.html",
  "type": "Section",
  "number": "",
  "title": "2.5 <span class=\"process-math\">\\(LU\\)<\/span> Factorization",
  "body": " 2.5 Factorization   2.5 Factorization   Overview   Topics   The factorization of a matrix.  Using factorization to solve a system.  Why the factorization works.     Goals   Compute an factorization of a matrix.  Apply factorization to solve systems of equations.  Determine whether a matrix has an factorization.     We have learned several techniques for solving the equation . We could solve using , but this requires computing the inverse of an matrix, which becomes difficult for large . Gaussian elimination is better, but still inefficient for large systems.  More efficient and numerically stable methods rely on matrix factorizations. A matrix factorization (or matrix decomposition ) is a factorization of a matrix into a product of matrices. Such factorizations help solve and reveal matrix structure. Several matrix factorizations appear throughout this course. In this section, we factor a matrix into lower and upper triangular matrices.  A rectangular matrix is upper triangular if whenever .   A rectangular matrix is lower triangular if whenever .   Can you have a matrix that is both upper and lower triangular?   There are many matrices which are both, such as       The Factorization   Factorization   If is an matrix that can be row reduced to echelon form without row exchanges, then there exists matrices and such that , where   is a lower triangular matrix with ones on the diagonal.  is an echelon form of .       If is a matrix, then its LU factorization has the form:      How do we find and ? Suppose can be row reduced to echelon form without interchanging rows. Then   where the are elementary row-operation matrices. These matrices are lower triangular and invertible. For example,   Therefore:      Algorithm for Computing  To compute an LU factorization:  Reduce to an echelon form using only row replacement operations. So no row swapping or scaling.  Place entries in so that the same sequence of row operations reduce to .    Note, in MATH 1554, the only allowed row replacement operation can be written in the form . The number is what should go into the row and column of , so .   Caution 1: Note that is the opposite of the scalar used in the row replacement. This is because the formula has a negative sign built in.   Caution 2: Note that you are only guaranteed to find the correct if you are working from left to right and from top to bottom. So, start with the leftmost pivot column and use its pivot row to elimnate all nonzero entries below it. Then move to the next pivot column (from the left) and repeat.     Compute the LU factorization of:     First, let's determine the sizes of and . Since is an echelon form of , we know that has the same dimension as . Thus, is a matrix. Since is a square matrix that multiplies on the left, must be a matrix.  Now, we determine by row reducing to echelon form only using row replacements of the form . Each time we make one of these row replacements, we are finding an entry of , specifically we are finding that .  I tend to write down the form of with blanks in the lower portion and fill them in after each row replacement. So, I start the problem with the following written towards the bottom of the page:    Note the following row operations:    : Note that the row replacement could be written as , so we have that .      : Since we used the row operation , we have that .      : Since we used the row operation , we have that . Since the matrix is in echelon form, we have found .      Therefore, we have that . We can check by verifying that .         Compute the LU factorization of:     Note will be a matrix and will be a matrix. I start by writing the following near the bottom of the page:    Note the following row operations: Therefore, we have that and .   Note that if we were only interested getting to echelon form, then we could do ; however, since we are interested in -factorization we must pay attention to Caution 2 . Therefore, we must use Row 2 next since it is the next pivot column. Note the following: Thus, we have that and .   We are still not in echelon form, so we must do one more row operation. Therefore, . What about ? Well, we didn't need to do anything to Row 5, so can we put anything in that position? NO. Notice, that if you put a non-zero number in that position, say , then we are saying that we need to do the row replacement which would mess up our row of zeros at the bottom of the matrix, thus undoing our work in getting to echelon form. Therefore, we need to make NO change to Row 5, which is doing the row replacement , so must be .   Since the final matrix is in echelon form, we have found . However, there is still one more entry of to determine, . Do we have to put a zero there? NO. Note that whatever number is in that position, say , would result in the row replacement which actually doesn't change anything since Row 4 is a row consisting entirely of 's. Therefore, , where can be anything you wish. Thus, we have that One consequence of this is that the factorization of a matrix might not be unique. It is true that is unique; however, there could be many possible 's that work.       Using the Decomposition  How do we use factorization to help us solve ?  If , then the equation can be written , or equivalently, . Setting , we do the following:   Forward substitution to solve for in .  Backward substitution to solve for in .   Since is an invertible matrix, the system will always be consistent and have a unique solution. The system may be inconsistent. Since is in echelon form, we can quickly determine whether is inconsistent by checking if there is a nonzero entry in that corresponds to a row of zeros in .    Solve the linear system with:     We start with determining a vector so that . Note that Therefore, we have that .   Next, we determine so that . Note that Therefore, we have that is the solution to the system .      "
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
  "id": "p-2-5-intro-objectives-6",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix factorization matrix decomposition "
},
{
  "id": "p-2-5-intro-objectives-7",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular "
},
{
  "id": "p-2-5-intro-objectives-9",
  "level": "2",
  "url": "Section-2-5.html#p-2-5-intro-objectives-9",
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
  "body": "  Compute the LU factorization of:     First, let's determine the sizes of and . Since is an echelon form of , we know that has the same dimension as . Thus, is a matrix. Since is a square matrix that multiplies on the left, must be a matrix.  Now, we determine by row reducing to echelon form only using row replacements of the form . Each time we make one of these row replacements, we are finding an entry of , specifically we are finding that .  I tend to write down the form of with blanks in the lower portion and fill them in after each row replacement. So, I start the problem with the following written towards the bottom of the page:    Note the following row operations:    : Note that the row replacement could be written as , so we have that .      : Since we used the row operation , we have that .      : Since we used the row operation , we have that . Since the matrix is in echelon form, we have found .      Therefore, we have that . We can check by verifying that .   "
},
{
  "id": "ex-compute-lu2",
  "level": "2",
  "url": "Section-2-5.html#ex-compute-lu2",
  "type": "Example",
  "number": "2.33",
  "title": "",
  "body": "  Compute the LU factorization of:     Note will be a matrix and will be a matrix. I start by writing the following near the bottom of the page:    Note the following row operations: Therefore, we have that and .   Note that if we were only interested getting to echelon form, then we could do ; however, since we are interested in -factorization we must pay attention to Caution 2 . Therefore, we must use Row 2 next since it is the next pivot column. Note the following: Thus, we have that and .   We are still not in echelon form, so we must do one more row operation. Therefore, . What about ? Well, we didn't need to do anything to Row 5, so can we put anything in that position? NO. Notice, that if you put a non-zero number in that position, say , then we are saying that we need to do the row replacement which would mess up our row of zeros at the bottom of the matrix, thus undoing our work in getting to echelon form. Therefore, we need to make NO change to Row 5, which is doing the row replacement , so must be .   Since the final matrix is in echelon form, we have found . However, there is still one more entry of to determine, . Do we have to put a zero there? NO. Note that whatever number is in that position, say , would result in the row replacement which actually doesn't change anything since Row 4 is a row consisting entirely of 's. Therefore, , where can be anything you wish. Thus, we have that One consequence of this is that the factorization of a matrix might not be unique. It is true that is unique; however, there could be many possible 's that work.   "
},
{
  "id": "ex-solve-with-lu",
  "level": "2",
  "url": "Section-2-5.html#ex-solve-with-lu",
  "type": "Example",
  "number": "2.34",
  "title": "",
  "body": "  Solve the linear system with:     We start with determining a vector so that . Note that Therefore, we have that .   Next, we determine so that . Note that Therefore, we have that is the solution to the system .   "
},
{
  "id": "Section-2-8",
  "level": "1",
  "url": "Section-2-8.html",
  "type": "Section",
  "number": "",
  "title": "2.8 Subspaces",
  "body": " 2.8 Subspaces   2.8 Subspaces   Overview   Topics   Subspaces, column space, and null space.  A basis for a subspace.     Goals   Determine whether a set is a subspace.  Determine whether a vector is in a particular subspace, or find a vector in that subspace.  Construct a basis for a subspace (e.g., a basis for ).    Motivating Question : Given a matrix , what is the set of vectors for which we can solve ?    Subset of   A subset of is any collection of vectors contained in .      Subspace   A subset of is a subspace if:    for all .  for any scalar and any .     Note that scalar closure implies the zero vector must be in .     Which of the following subsets could be subspaces of ?   A graphic showing three subsets of . The first (a) is the unit square. The second (b) is a line through the origin. The third (c) is a line that does not pass throught the origin.     For (a), note that the unit square contains the vector , but does not contain the vector . Therefore, the unit square is NOT a subspace of .  For (b), first note that the line passes throught the origin, so the subset contains . Next, if is a nonzero vector on the line, we see that every vector on the line can be expressed as some multiple of . Therefore, the subset can be written as . It follows that the subset is closed under vector addition and scalar multiplication. Hence, a line passing throught the origin IS as subpace of .  For (c), note that the line does NOT pass through the origin. So the subset does NOT contain and is NOT a subspace of .       Examples of Subspaces    For each subset of given below, determine if it is a subspace of .          Note that . Also, we have that is closed under vector addition and scalar multiplication since every vector you choose in has to be since it is the only vector in . Thus, is a subspace of .           Note that , but . Therefore, is NOT closed under scalar multiplication, so is NOT a subspace of .           Note that , but . Thus, is not closed under vector addition, so is NOT a subspace of .           Since is the span of a set of vectors, we know that contains every possible linear combination of its vectors. Therefore, must contain and must be closed under vector addition and scalar multiplication. Hence, is a subspace of .        More Examples of Subspaces    The following subsets of are written in set-builder notation. For each, determine if it is a subspace of . Note that is the set of integers.          Note that , but since is not an integer. Therefore, is NOT closed under scalar multiplication, so is NOT a subspace of .           Note that . It follows that is a subspace of .           Note that . It follows that is a subspace of . In fact, the solution set of any homogeneous system is a subspace of . This subspace is called the nullspace (see ).           Note that , so is NOT a subspace of . In fact, the solution set of any inhomogeneous system is NOT a subspace of .        The Column Space and Null Space  Recall that for vectors , is the subspace consisting of all linear combinations of these vectors. Not only is the span of vectors an example of a subspace of , they are the only examples of subspace of .    Every subspace of can be written as the span of a finite number of vectors; that is, if is a subspace of , then there exists vectors so that .      Column Space and Null Space   Let be an matrix.   The column space of , , is the subspace of spanned by .  The null space of , , is the subspace of consisting of all solutions to .       Let be an matrix, and let be any matrix which is row equivalent to . Then  The subspaces and are most likely different. So, often, .  The subspaces and are always the same. So, it is always true that .         Is in the column space of ?     By , asking whether is equivalent to asking whether the matrix equation has a solution. By , we must augment with the matrix and cannot augment with . Note that . Since we do not have a pivot in the augmented column, the system is consistent. Hence, .  You can find a particular linear combination of the columns of which produce by continuing to solve the system.       Basis    Determine whether is in .     By , we are free to check whether or since . Note that . Thus, for any value of .  Let's determine if there are any other vectors in . Since we determine all solutions to . Since is already in RREF, we see that is a free variable and and are pivot variables. It follows that        Definition of basis and Example   Basis   A basis for a subspace is a set of linearly independent vectors in that span .    In MATH 1554, each basis will be a finite set of vectors. For every subspace other than the trivial subspace , there are infinitely many choices for the basis.  Be careful to NEVER include when writing your basis. Writing of the basis gives the entire subspace. A basis is NOT the entire subspace, but a finite set of building blocks used to build the space.     Let      Find at least three vectors which live in .    We have the following  since  since  since        Find a matrix such that .    Note that if , then , which is the defining characteristic of the vectors in . Therefore, .      Construct a basis for .    Note that the second, third, and fourth columns of correspond to free variables. Therefore, and are the free variables and is the pivot variables. It follows that   Therefore, we see that the three vectors span . Since they are linearly independent, they form a basis for . Thus, a basis for is the set of vectors . This basis is NOT unique. Note you can replace any of the three vectors with a nonzero multiple of itself. Also, you could replace one of them with suitable linear combination. For example, you could replace the middle vector with the first place the second and that would still yield a valid basis since the resulting three vectors would be linearly independent and span the space.        Example: Basis for Column Space and Null Space    Construct a basis for and .     First, note that we can express as the span of some vectors by finding all solutions to . It follows that Thus, a basis for is   By the definition of , we see that Note that the set containing the four column vectors of is NOT a basis since those vectors are NOT linearly independent. From , we see that Column 2 and Column 4 of are NOT pivot columns. Therefore, they are linearly dependent on the other columns of . It follows that the following set containing Column 1 and Column 2 of spans and is linearly independent, so it is a basis for .        Another Example    Let      Give an example of a vector that is in .    Note that since and since .      Give an example of a vector that is not in .    Note that since       Is the zero vector in ?    Yes, since .      Is a subspace of ?    From (a) and (b), we see that , but . Thus, is not closed under vector addition. Hence, is NOT a subspace of .       "
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
  "body": " Subspace   A subset of is a subspace if:    for all .  for any scalar and any .    "
},
{
  "id": "ex-subspace-pictures",
  "level": "2",
  "url": "Section-2-8.html#ex-subspace-pictures",
  "type": "Example",
  "number": "2.37",
  "title": "",
  "body": "  Which of the following subsets could be subspaces of ?   A graphic showing three subsets of . The first (a) is the unit square. The second (b) is a line through the origin. The third (c) is a line that does not pass throught the origin.     For (a), note that the unit square contains the vector , but does not contain the vector . Therefore, the unit square is NOT a subspace of .  For (b), first note that the line passes throught the origin, so the subset contains . Next, if is a nonzero vector on the line, we see that every vector on the line can be expressed as some multiple of . Therefore, the subset can be written as . It follows that the subset is closed under vector addition and scalar multiplication. Hence, a line passing throught the origin IS as subpace of .  For (c), note that the line does NOT pass through the origin. So the subset does NOT contain and is NOT a subspace of .   "
},
{
  "id": "p-2-8-subspace-examples-2",
  "level": "2",
  "url": "Section-2-8.html#p-2-8-subspace-examples-2",
  "type": "Example",
  "number": "2.38",
  "title": "",
  "body": "  For each subset of given below, determine if it is a subspace of .          Note that . Also, we have that is closed under vector addition and scalar multiplication since every vector you choose in has to be since it is the only vector in . Thus, is a subspace of .           Note that , but . Therefore, is NOT closed under scalar multiplication, so is NOT a subspace of .           Note that , but . Thus, is not closed under vector addition, so is NOT a subspace of .           Since is the span of a set of vectors, we know that contains every possible linear combination of its vectors. Therefore, must contain and must be closed under vector addition and scalar multiplication. Hence, is a subspace of .    "
},
{
  "id": "handout-section-2-8-subspaces-4-2",
  "level": "2",
  "url": "Section-2-8.html#handout-section-2-8-subspaces-4-2",
  "type": "Example",
  "number": "2.39",
  "title": "",
  "body": "  The following subsets of are written in set-builder notation. For each, determine if it is a subspace of . Note that is the set of integers.          Note that , but since is not an integer. Therefore, is NOT closed under scalar multiplication, so is NOT a subspace of .           Note that . It follows that is a subspace of .           Note that . It follows that is a subspace of . In fact, the solution set of any homogeneous system is a subspace of . This subspace is called the nullspace (see ).           Note that , so is NOT a subspace of . In fact, the solution set of any inhomogeneous system is NOT a subspace of .    "
},
{
  "id": "thm-subspace-are-span",
  "level": "2",
  "url": "Section-2-8.html#thm-subspace-are-span",
  "type": "Theorem",
  "number": "2.40",
  "title": "",
  "body": "  Every subspace of can be written as the span of a finite number of vectors; that is, if is a subspace of , then there exists vectors so that .   "
},
{
  "id": "def-col-null",
  "level": "2",
  "url": "Section-2-8.html#def-col-null",
  "type": "Definition",
  "number": "2.41",
  "title": "Column Space and Null Space.",
  "body": " Column Space and Null Space   Let be an matrix.   The column space of , , is the subspace of spanned by .  The null space of , , is the subspace of consisting of all solutions to .    "
},
{
  "id": "thm-nul-same-col-dif",
  "level": "2",
  "url": "Section-2-8.html#thm-nul-same-col-dif",
  "type": "Theorem",
  "number": "2.42",
  "title": "",
  "body": "  Let be an matrix, and let be any matrix which is row equivalent to . Then  The subspaces and are most likely different. So, often, .  The subspaces and are always the same. So, it is always true that .     "
},
{
  "id": "ex-colspace-membership",
  "level": "2",
  "url": "Section-2-8.html#ex-colspace-membership",
  "type": "Example",
  "number": "2.43",
  "title": "",
  "body": "  Is in the column space of ?     By , asking whether is equivalent to asking whether the matrix equation has a solution. By , we must augment with the matrix and cannot augment with . Note that . Since we do not have a pivot in the augmented column, the system is consistent. Hence, .  You can find a particular linear combination of the columns of which produce by continuing to solve the system.   "
},
{
  "id": "ex-nullspace-membership",
  "level": "2",
  "url": "Section-2-8.html#ex-nullspace-membership",
  "type": "Example",
  "number": "2.44",
  "title": "",
  "body": "  Determine whether is in .     By , we are free to check whether or since . Note that . Thus, for any value of .  Let's determine if there are any other vectors in . Since we determine all solutions to . Since is already in RREF, we see that is a free variable and and are pivot variables. It follows that    "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "Section-2-8.html#def-basis",
  "type": "Definition",
  "number": "2.45",
  "title": "Basis.",
  "body": " Basis   A basis for a subspace is a set of linearly independent vectors in that span .   "
},
{
  "id": "ex-basis-subspace",
  "level": "2",
  "url": "Section-2-8.html#ex-basis-subspace",
  "type": "Example",
  "number": "2.46",
  "title": "",
  "body": "  Let      Find at least three vectors which live in .    We have the following  since  since  since        Find a matrix such that .    Note that if , then , which is the defining characteristic of the vectors in . Therefore, .      Construct a basis for .    Note that the second, third, and fourth columns of correspond to free variables. Therefore, and are the free variables and is the pivot variables. It follows that   Therefore, we see that the three vectors span . Since they are linearly independent, they form a basis for . Thus, a basis for is the set of vectors . This basis is NOT unique. Note you can replace any of the three vectors with a nonzero multiple of itself. Also, you could replace one of them with suitable linear combination. For example, you could replace the middle vector with the first place the second and that would still yield a valid basis since the resulting three vectors would be linearly independent and span the space.    "
},
{
  "id": "ex-basis-col-null",
  "level": "2",
  "url": "Section-2-8.html#ex-basis-col-null",
  "type": "Example",
  "number": "2.47",
  "title": "",
  "body": "  Construct a basis for and .     First, note that we can express as the span of some vectors by finding all solutions to . It follows that Thus, a basis for is   By the definition of , we see that Note that the set containing the four column vectors of is NOT a basis since those vectors are NOT linearly independent. From , we see that Column 2 and Column 4 of are NOT pivot columns. Therefore, they are linearly dependent on the other columns of . It follows that the following set containing Column 1 and Column 2 of spans and is linearly independent, so it is a basis for .    "
},
{
  "id": "ex-V-ab-equals-zero",
  "level": "2",
  "url": "Section-2-8.html#ex-V-ab-equals-zero",
  "type": "Example",
  "number": "2.48",
  "title": "",
  "body": "  Let      Give an example of a vector that is in .    Note that since and since .      Give an example of a vector that is not in .    Note that since       Is the zero vector in ?    Yes, since .      Is a subspace of ?    From (a) and (b), we see that , but . Thus, is not closed under vector addition. Hence, is NOT a subspace of .    "
},
{
  "id": "Section-2-9",
  "level": "1",
  "url": "Section-2-9.html",
  "type": "Section",
  "number": "",
  "title": "2.9 Dimension and Rank",
  "body": " 2.9 Dimension and Rank   2.9 Dimension and Rank   Overview   Topics   Coordinates relative to a basis.  Dimension of a subspace.  The rank of a matrix.     Goals   Calculate coordinates of a vector in a given basis.  Characterize subspaces using the concept of dimension.  Characterize matrices using rank, column space, and null space.  Apply the Rank, Basis, and Invertibility Theorems to describe matrices and subspaces.      Key idea: Many different bases may be chosen for a given subspace. The choice can dramatically affect coordinate representations.     Sketch in each coordinate system below.    Two coordinate systems showing different basis orientations.  Two grids with different bases; vectors and are drawn.        Coordinates Relative to a Basis   Coordinates Relative to a Basis   Let be a basis for a subspace . For any , the coordinates of relative to are the scalars such that   The coordinate vector of relative to is:        Let:   Verify that is in the span of , and compute .    Let . Note that is a basis for since the vectors in both span and are linearly independent.  We determine if by seeing whether can be written as a linear combination of the basis vectors; that is, we need to find whether there exists so that . Note that Therefore, we have that . Since there were no free variables, we see that this is the ONLY way of expressing as a linear combination of the basis vectors. Therefore, The coordinate vector of relative to being a vector in is not a mistake. This must happen since the basis contains two vectors. If you chose a different basis for , say , then would still be a vector in , but would most likely be different.       Another Example of Coordinate Vector    Let   and .     Verify that is a basis for .    Note that the matrix has a pivot in each column. Therefore, the columns are linearly independent. Since the vectors in span and are linearly independent, is a basis for .      Determine if .    Note that . So, .      Compute .    Since , we have .        Dimension   Dimension   The dimension of a nonzero subspace , written , is the number of vectors in any basis of . We define .      Dimension Is Well-Defined   Any two bases and of a nonzero subspace have the same number of vectors.     Some Examples:   .   has dimension .  is the number of free variables.  is the number of pivotal columns.       Rank   Rank   The rank of a matrix is the dimension of its column space.       Compute and and find a basis for and , where     First, note that we can express the column space as the span of the columns of ; that is, . This does not mean that the set containing those five vectors forms a basis. In fact, we know from that no set containing five vectors from can form a basis. Since Columns 3 and 5 of do not correspond to pivot columns, they are linearly dependent on the other vectors and are not needed in the span. Therefore, we have that a basis for is . Thus, .  From , is equal to the number of free variables. Therefore, . We can find a basis for by finding two vectors which are linearly independent satisfy . You can attempt to find such vectors by guessing (strategically). If that fails, you can proceed to following our normal procedure. Note that we have already been given an echelon form of and can see that Columns 3 and 5 correspond to free variables. Solving for the pivot varialbes in terms of and yields , , and . It follows that . Thus, a basis for is .       Rank, Basis, and Invertibility Theorems   Rank Theorem   If a matrix has columns, then       Basis Theorem   Any two bases for a subspace have the same number of vectors. That common number of vectors is the dimension of the subspace.      The Invertible Matrix Theorem (Continued)   Let be an matrix. The following are equivalent:   (a)   is invertible.  (m)   The columns of form a basis for .  (n)   .  (o)   .  (p)   .  (q)   .  (r)   .        Examples    For each part below, give an example of a matrix in RREF with the stated property, if possible.          In order for , states that must have 3 pivots. Since only has two rows, it cannot have 3 pivots. Therefore, this is not possible.           In order for , the matrix must have 2 pivots. This is possible, for example . In this case, .           In order for , states that must have two free variables. Therefore, works. In this case, .           Recall from that . Therefore, should have no free variables, or equivalently, should have a pivot in every column. This is impossible for a matrix with more columns than rows. Therefore, there is no matrix such that .       "
},
{
  "id": "obj-2-9-topics-goals",
  "level": "2",
  "url": "Section-2-9.html#obj-2-9-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Coordinates relative to a basis.  Dimension of a subspace.  The rank of a matrix.   "
},
{
  "id": "p-2-9-intro-objectives-3",
  "level": "2",
  "url": "Section-2-9.html#p-2-9-intro-objectives-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Calculate coordinates of a vector in a given basis.  Characterize subspaces using the concept of dimension.  Characterize matrices using rank, column space, and null space.  Apply the Rank, Basis, and Invertibility Theorems to describe matrices and subspaces.   "
},
{
  "id": "p-2-9-intro-objectives-7",
  "level": "2",
  "url": "Section-2-9.html#p-2-9-intro-objectives-7",
  "type": "Example",
  "number": "2.49",
  "title": "",
  "body": "  Sketch in each coordinate system below.    Two coordinate systems showing different basis orientations.  Two grids with different bases; vectors and are drawn.    "
},
{
  "id": "def-coordinates",
  "level": "2",
  "url": "Section-2-9.html#def-coordinates",
  "type": "Definition",
  "number": "2.50",
  "title": "Coordinates Relative to a Basis.",
  "body": " Coordinates Relative to a Basis   Let be a basis for a subspace . For any , the coordinates of relative to are the scalars such that   The coordinate vector of relative to is:    "
},
{
  "id": "ex-coordinates",
  "level": "2",
  "url": "Section-2-9.html#ex-coordinates",
  "type": "Example",
  "number": "2.51",
  "title": "",
  "body": "  Let:   Verify that is in the span of , and compute .    Let . Note that is a basis for since the vectors in both span and are linearly independent.  We determine if by seeing whether can be written as a linear combination of the basis vectors; that is, we need to find whether there exists so that . Note that Therefore, we have that . Since there were no free variables, we see that this is the ONLY way of expressing as a linear combination of the basis vectors. Therefore, The coordinate vector of relative to being a vector in is not a mistake. This must happen since the basis contains two vectors. If you chose a different basis for , say , then would still be a vector in , but would most likely be different.   "
},
{
  "id": "ex-coordinates2",
  "level": "2",
  "url": "Section-2-9.html#ex-coordinates2",
  "type": "Example",
  "number": "2.52",
  "title": "",
  "body": "  Let   and .     Verify that is a basis for .    Note that the matrix has a pivot in each column. Therefore, the columns are linearly independent. Since the vectors in span and are linearly independent, is a basis for .      Determine if .    Note that . So, .      Compute .    Since , we have .    "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "Section-2-9.html#def-dimension",
  "type": "Definition",
  "number": "2.53",
  "title": "Dimension.",
  "body": " Dimension   The dimension of a nonzero subspace , written , is the number of vectors in any basis of . We define .   "
},
{
  "id": "thm-dimension-basis",
  "level": "2",
  "url": "Section-2-9.html#thm-dimension-basis",
  "type": "Theorem",
  "number": "2.54",
  "title": "Dimension Is Well-Defined.",
  "body": " Dimension Is Well-Defined   Any two bases and of a nonzero subspace have the same number of vectors.   "
},
{
  "id": "note-examples-dimension",
  "level": "2",
  "url": "Section-2-9.html#note-examples-dimension",
  "type": "Note",
  "number": "2.55",
  "title": "",
  "body": "Some Examples:   .   has dimension .  is the number of free variables.  is the number of pivotal columns.   "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "Section-2-9.html#def-rank",
  "type": "Definition",
  "number": "2.56",
  "title": "Rank.",
  "body": " Rank   The rank of a matrix is the dimension of its column space.   "
},
{
  "id": "ex-rank-computation",
  "level": "2",
  "url": "Section-2-9.html#ex-rank-computation",
  "type": "Example",
  "number": "2.57",
  "title": "",
  "body": "  Compute and and find a basis for and , where     First, note that we can express the column space as the span of the columns of ; that is, . This does not mean that the set containing those five vectors forms a basis. In fact, we know from that no set containing five vectors from can form a basis. Since Columns 3 and 5 of do not correspond to pivot columns, they are linearly dependent on the other vectors and are not needed in the span. Therefore, we have that a basis for is . Thus, .  From , is equal to the number of free variables. Therefore, . We can find a basis for by finding two vectors which are linearly independent satisfy . You can attempt to find such vectors by guessing (strategically). If that fails, you can proceed to following our normal procedure. Note that we have already been given an echelon form of and can see that Columns 3 and 5 correspond to free variables. Solving for the pivot varialbes in terms of and yields , , and . It follows that . Thus, a basis for is .   "
},
{
  "id": "thm-rank-theorem",
  "level": "2",
  "url": "Section-2-9.html#thm-rank-theorem",
  "type": "Theorem",
  "number": "2.58",
  "title": "Rank Theorem.",
  "body": " Rank Theorem   If a matrix has columns, then    "
},
{
  "id": "thm-basis-theorem",
  "level": "2",
  "url": "Section-2-9.html#thm-basis-theorem",
  "type": "Theorem",
  "number": "2.59",
  "title": "Basis Theorem.",
  "body": " Basis Theorem   Any two bases for a subspace have the same number of vectors. That common number of vectors is the dimension of the subspace.   "
},
{
  "id": "thm-IMT-Cont-1",
  "level": "2",
  "url": "Section-2-9.html#thm-IMT-Cont-1",
  "type": "Theorem",
  "number": "2.60",
  "title": "The Invertible Matrix Theorem (Continued).",
  "body": " The Invertible Matrix Theorem (Continued)   Let be an matrix. The following are equivalent:   (a)   is invertible.  (m)   The columns of form a basis for .  (n)   .  (o)   .  (p)   .  (q)   .  (r)   .    "
},
{
  "id": "ex-rref-rank-questions",
  "level": "2",
  "url": "Section-2-9.html#ex-rref-rank-questions",
  "type": "Example",
  "number": "2.61",
  "title": "",
  "body": "  For each part below, give an example of a matrix in RREF with the stated property, if possible.          In order for , states that must have 3 pivots. Since only has two rows, it cannot have 3 pivots. Therefore, this is not possible.           In order for , the matrix must have 2 pivots. This is possible, for example . In this case, .           In order for , states that must have two free variables. Therefore, works. In this case, .           Recall from that . Therefore, should have no free variables, or equivalently, should have a pivot in every column. This is impossible for a matrix with more columns than rows. Therefore, there is no matrix such that .    "
},
{
  "id": "Section-3-1",
  "level": "1",
  "url": "Section-3-1.html",
  "type": "Section",
  "number": "",
  "title": "3.1 Introduction to Determinants",
  "body": " 3.1 Introduction to Determinants   3.1 Introduction to Determinants   Overview   Topics   The definition and computation of a determinant.  The determinant of triangular matrices.     Goals   Compute determinants of matrices using a cofactor expansion.  Apply theorems to compute determinants of matrices that have particular structures.      Determinant   Suppose is with entries . Then the determinant of , written or or , is defined by the following recursive formula.   If , then and .  If , then    where is the submatrix obtained by deleting row and column of .       Compute .    Using , we have that .       More examples    Use the definition to compute     Using and the result from , we have        Use the definition to compute     Note that        Cofactors and Expansion   Cofactor   For an matrix , the cofactor is   The sign pattern alternates in a checkerboard:      Cofactor Expansion along Any Row or Column   The determinant of can be computed by expanding along any row or any column. For example, expanding down the -th column:     This gives a practical way to compute determinants more efficiently by choosing rows or columns with many zeros.    Example: A 4×4 Determinant    Use to compute the determinant of in an efficient manner.     We will calculate the determinant by expanding along the first column. Note that . To calculate the determinant of the remaining matrix, we can expand over any row or column we choose. How about expanding over Column 3 since there are several 0's. Note that        Triangular Matrices   Determinant of a Triangular Matrix   If is triangular (upper or lower), then   the product of its diagonal entries.      Compute the determinant of the following triangular matrix.     By , we have that      A naive cofactor expansion for an matrix requires on the order of multiplications, which grows very quickly:  A matrix requires roughly multiplications.  A matrix requires approximately multiplications.    This doesn't mean that determinants are not useful.  We will briefly study more efficient methods for computing determinants.  We will learn some application of determinants, such as solving linear systems and calculating area\/volume of certain regions.  Determinants are used in multivariable calculus (e.g., Jacobians for change of variables in integrals).      "
},
{
  "id": "obj-3-1-topics-goals",
  "level": "2",
  "url": "Section-3-1.html#obj-3-1-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The definition and computation of a determinant.  The determinant of triangular matrices.   "
},
{
  "id": "p-3-1-overview-3",
  "level": "2",
  "url": "Section-3-1.html#p-3-1-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Compute determinants of matrices using a cofactor expansion.  Apply theorems to compute determinants of matrices that have particular structures.   "
},
{
  "id": "def-determinant",
  "level": "2",
  "url": "Section-3-1.html#def-determinant",
  "type": "Definition",
  "number": "3.1",
  "title": "Determinant.",
  "body": " Determinant   Suppose is with entries . Then the determinant of , written or or , is defined by the following recursive formula.   If , then and .  If , then    where is the submatrix obtained by deleting row and column of .   "
},
{
  "id": "ex-det-2x2",
  "level": "2",
  "url": "Section-3-1.html#ex-det-2x2",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": "  Compute .    Using , we have that .   "
},
{
  "id": "ex-det-3x3",
  "level": "2",
  "url": "Section-3-1.html#ex-det-3x3",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": "  Use the definition to compute     Using and the result from , we have    "
},
{
  "id": "ex-det-3x3-2",
  "level": "2",
  "url": "Section-3-1.html#ex-det-3x3-2",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": "  Use the definition to compute     Note that    "
},
{
  "id": "def-cofactor",
  "level": "2",
  "url": "Section-3-1.html#def-cofactor",
  "type": "Definition",
  "number": "3.5",
  "title": "Cofactor.",
  "body": " Cofactor   For an matrix , the cofactor is   The sign pattern alternates in a checkerboard:    "
},
{
  "id": "thm-cofactor-expansion-any-row-col",
  "level": "2",
  "url": "Section-3-1.html#thm-cofactor-expansion-any-row-col",
  "type": "Theorem",
  "number": "3.6",
  "title": "Cofactor Expansion along Any Row or Column.",
  "body": " Cofactor Expansion along Any Row or Column   The determinant of can be computed by expanding along any row or any column. For example, expanding down the -th column:    "
},
{
  "id": "ex-det-4x4",
  "level": "2",
  "url": "Section-3-1.html#ex-det-4x4",
  "type": "Example",
  "number": "3.7",
  "title": "",
  "body": "  Use to compute the determinant of in an efficient manner.     We will calculate the determinant by expanding along the first column. Note that . To calculate the determinant of the remaining matrix, we can expand over any row or column we choose. How about expanding over Column 3 since there are several 0's. Note that    "
},
{
  "id": "thm-triangular-det",
  "level": "2",
  "url": "Section-3-1.html#thm-triangular-det",
  "type": "Theorem",
  "number": "3.8",
  "title": "Determinant of a Triangular Matrix.",
  "body": " Determinant of a Triangular Matrix   If is triangular (upper or lower), then   the product of its diagonal entries.   "
},
{
  "id": "ex-triangular-large",
  "level": "2",
  "url": "Section-3-1.html#ex-triangular-large",
  "type": "Example",
  "number": "3.9",
  "title": "",
  "body": "  Compute the determinant of the following triangular matrix.     By , we have that    "
},
{
  "id": "Section-3-2",
  "level": "1",
  "url": "Section-3-2.html",
  "type": "Section",
  "number": "",
  "title": "3.2 Properties of the Determinant",
  "body": " 3.2 Properties of the Determinant   3.2 Properties of the Determinant   Overview   Topics   The relationships between row reductions, invertibility, and determinants.     Goals   Apply determinant properties (related to row reductions, transpose, and matrix products) to compute determinants efficiently.  Use determinants to determine whether a square matrix is invertible.     We have a method for computing determinants, but without the strategies in this section, the cofactor-expansion algorithm can be very inefficient. Row operations provide a more efficient method.    Row Operations and the Determinant   Let be a square matrix.   If a multiple of one row of is added to another to produce , then .  If two rows of are interchanged to produce , then .  If a row of is multiplied by a scalar to produce , then .      Let . Note that Below, we will use an example of each type of row operation to show how the determinant changes according to .   Consider the row replacement operation : . Note that     Consider swapping Row 1 and Row 2: . Note that .    Consider the row scaling operation : . Note that          Example 1    Compute:     Since the matrix does not have any zeros, we start by performing row operations to create some zeros below the pivots. Then we use cofactor expansion. Feel free to go all the way to echelon form if you want. . Instead of expanding over the first column, we could have expanded over the second row, which would have resulted in Instead of using cofactor expansion, we could have swapped Row 2 and Row 3, which would negate my determinant by , and then used . This would result in . Regardless of the path chosen to evaluate the determinant, we get the same answer.       Compute:     In this example, we will reduce the matrix all the way down to REF and then apply . Note that        Determinants and Invertibility    If is reduced to echelon form using row interchanges, then        For any matrices and , the following properties hold:   is invertible if and only if .  .  .        Additional Example    Determine the value of:     Since the determinant is multiplicative ( part (b)), we have the following:        Use the determinant to find all values of for which the matrix is not invertible.     First, note that can be written as We know from part (a) that is not invertible if and only if . Note that . Therefore, we have that the which make not invertible are precisely those which make , or equivalently, which make . Thus, the which make not invertible are .      "
},
{
  "id": "obj-3-2-topics-goals",
  "level": "2",
  "url": "Section-3-2.html#obj-3-2-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The relationships between row reductions, invertibility, and determinants.   "
},
{
  "id": "p-3-2-overview-3",
  "level": "2",
  "url": "Section-3-2.html#p-3-2-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Apply determinant properties (related to row reductions, transpose, and matrix products) to compute determinants efficiently.  Use determinants to determine whether a square matrix is invertible.   "
},
{
  "id": "thm-det-row-operations",
  "level": "2",
  "url": "Section-3-2.html#thm-det-row-operations",
  "type": "Theorem",
  "number": "3.10",
  "title": "Row Operations and the Determinant.",
  "body": " Row Operations and the Determinant   Let be a square matrix.   If a multiple of one row of is added to another to produce , then .  If two rows of are interchanged to produce , then .  If a row of is multiplied by a scalar to produce , then .    "
},
{
  "id": "ex-3-2-rowops-example1",
  "level": "2",
  "url": "Section-3-2.html#ex-3-2-rowops-example1",
  "type": "Example",
  "number": "3.11",
  "title": "",
  "body": "  Compute:     Since the matrix does not have any zeros, we start by performing row operations to create some zeros below the pivots. Then we use cofactor expansion. Feel free to go all the way to echelon form if you want. . Instead of expanding over the first column, we could have expanded over the second row, which would have resulted in Instead of using cofactor expansion, we could have swapped Row 2 and Row 3, which would negate my determinant by , and then used . This would result in . Regardless of the path chosen to evaluate the determinant, we get the same answer.   "
},
{
  "id": "ex-3-2-rowops-example2",
  "level": "2",
  "url": "Section-3-2.html#ex-3-2-rowops-example2",
  "type": "Example",
  "number": "3.12",
  "title": "",
  "body": "  Compute:     In this example, we will reduce the matrix all the way down to REF and then apply . Note that    "
},
{
  "id": "thm-det-prod-pivots",
  "level": "2",
  "url": "Section-3-2.html#thm-det-prod-pivots",
  "type": "Theorem",
  "number": "3.13",
  "title": "",
  "body": "  If is reduced to echelon form using row interchanges, then    "
},
{
  "id": "thm-det-props",
  "level": "2",
  "url": "Section-3-2.html#thm-det-props",
  "type": "Theorem",
  "number": "3.14",
  "title": "",
  "body": "  For any matrices and , the following properties hold:   is invertible if and only if .  .  .    "
},
{
  "id": "ex-3-2-det-power",
  "level": "2",
  "url": "Section-3-2.html#ex-3-2-det-power",
  "type": "Example",
  "number": "3.15",
  "title": "",
  "body": "  Determine the value of:     Since the determinant is multiplicative ( part (b)), we have the following:    "
},
{
  "id": "ex-3-2-lambda",
  "level": "2",
  "url": "Section-3-2.html#ex-3-2-lambda",
  "type": "Example",
  "number": "3.16",
  "title": "",
  "body": "  Use the determinant to find all values of for which the matrix is not invertible.     First, note that can be written as We know from part (a) that is not invertible if and only if . Note that . Therefore, we have that the which make not invertible are precisely those which make , or equivalently, which make . Thus, the which make not invertible are .   "
},
{
  "id": "Section-3-3",
  "level": "1",
  "url": "Section-3-3.html",
  "type": "Section",
  "number": "",
  "title": "3.3 Applications of the Determinant",
  "body": " 3.3 Applications of the Determinant   3.3 Applications of the Determinant   Overview   Topics   Relationships between area, volume, determinants, and linear transformations.  Cramer's Rule for linear systems.     Goals   Use determinants to compute the area of a parallelogram or the volume of a parallelepiped, possibly under a given linear transformation.  Use determinants and Cramer's Rule to solve systems of linear equations.     In , determinants measure the (signed) area of the parallelogram formed by two vectors.   Parallelogram in the plane spanned by two vectors.  Illustration of a parallelogram in spanned by two vectors forming a matrix whose determinant gives the signed area.   Area of the parallelogram .    Area from the Determinant   The area of the parallelogram spanned by the columns of a matrix is .     Volume from the Determinant   The volume of the parallelepiped spanned by the columns of an matrix is .       Examples of Determinant giving Volume    Calculate the area of the parallelogram determined by the points , , , and .    Below is the graph of the parallelogram in .    A drawing of the parallelogram in the plane.   Notice that the vector connects the point to the point . Also, the vector connects the point to the point . Using , we have that the area of the parallelogram is        Calculate the area of the triangle determined by the points , , and .    Note that applies to parallelograms, not triangles. However, every triangle is half of some parallelogram. For example, notice in the graph below how the described triangle (in blue) can be extended by adjoining a copy of the triangle (in red) to one of the three edges and forming a parallelogram.    A drawing of the described triangle in the plane, adjoined with a copy of the triange with points (0,3), (4,-1), and (7,4), forming a parallelogram.   It follows that the area of the triangle is half the area of the parallelogram. We see that vectors describe adjacent sides of the parallelogram. Therefore, we have that the area of the triangle is .       Linear Transformations and Volume Scaling   Volume Scaling by a Linear Transformation   If is the linear transformation defined by , and is any closed shape in , then     Some observations:  Recall from Section 1.9 that the matrix corresponding to a shearing linear transformation has the from or . Since each of these matrices has determinant 1, we see that shearing does not change the area of a shape.  Note that can be any closed shape. This includes parallelograms, polygons, circles, or crazy blobs, as long as the edge of the shape is connected.       Find the area of the interior of the ellipse defined by the equation .    Below, we have included a graph of the ellipse in the -plane.    A drawing of the described ellipse in the standard coordinate system.   It is difficult to find the area of this tilted ellipse using geometry. Instead, we will use . We start with a change of variables. Let and . Then, the equation for in terms of and becomes . Note that is the equation for the unit circle which has area .   In order to use , we need to identify a linear transformation which maps the ellipse in the -plane to the unit circle in the -plane. Therefore, we need to find a linear transformation which accepts a point on and returns a point on . Recalling the definition of and in terms of and , we see that needs to do the following: . It follows that . Therefore, is the linear transformation that maps to .   By , we have that . Since we know has area , we find that . Thus, the area of the ellipse is .       Cramer's Rule   Cramer's Rule   Let be an invertible matrix and let . Then the system has the unique solution whose entires are given by , where is the matrix formed by replacing the column of by .       Use Cramer's Rule to solve the system .    Let . Expanding down the first column of , we see that . Therefore, is invertible matrix, so the system has a unique solution and we can use Cramer's Rule.   We find by replacing the first column of with : . By expanding down the first column of , we see that . It follows that .   We find by replacing the second column of with : . Expanding across the third row yields . It follows that .   We find by replacing the third column of with : . Expanding across the third row yields . It follows that .   Therefore, we have that the solution vector is .      "
},
{
  "id": "obj-3-3-topics-goals",
  "level": "2",
  "url": "Section-3-3.html#obj-3-3-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Relationships between area, volume, determinants, and linear transformations.  Cramer's Rule for linear systems.   "
},
{
  "id": "p-3-3-overview-3",
  "level": "2",
  "url": "Section-3-3.html#p-3-3-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Use determinants to compute the area of a parallelogram or the volume of a parallelepiped, possibly under a given linear transformation.  Use determinants and Cramer's Rule to solve systems of linear equations.   "
},
{
  "id": "thm-area-abs-det",
  "level": "2",
  "url": "Section-3-3.html#thm-area-abs-det",
  "type": "Theorem",
  "number": "3.17",
  "title": "Area from the Determinant.",
  "body": " Area from the Determinant   The area of the parallelogram spanned by the columns of a matrix is .   "
},
{
  "id": "thm-volume-abs-det",
  "level": "2",
  "url": "Section-3-3.html#thm-volume-abs-det",
  "type": "Theorem",
  "number": "3.18",
  "title": "Volume from the Determinant.",
  "body": " Volume from the Determinant   The volume of the parallelepiped spanned by the columns of an matrix is .   "
},
{
  "id": "ex-3-3-area-parallelogram",
  "level": "2",
  "url": "Section-3-3.html#ex-3-3-area-parallelogram",
  "type": "Example",
  "number": "3.19",
  "title": "",
  "body": "  Calculate the area of the parallelogram determined by the points , , , and .    Below is the graph of the parallelogram in .    A drawing of the parallelogram in the plane.   Notice that the vector connects the point to the point . Also, the vector connects the point to the point . Using , we have that the area of the parallelogram is    "
},
{
  "id": "ex-3-3-area-triangle",
  "level": "2",
  "url": "Section-3-3.html#ex-3-3-area-triangle",
  "type": "Example",
  "number": "3.20",
  "title": "",
  "body": "  Calculate the area of the triangle determined by the points , , and .    Note that applies to parallelograms, not triangles. However, every triangle is half of some parallelogram. For example, notice in the graph below how the described triangle (in blue) can be extended by adjoining a copy of the triangle (in red) to one of the three edges and forming a parallelogram.    A drawing of the described triangle in the plane, adjoined with a copy of the triange with points (0,3), (4,-1), and (7,4), forming a parallelogram.   It follows that the area of the triangle is half the area of the parallelogram. We see that vectors describe adjacent sides of the parallelogram. Therefore, we have that the area of the triangle is .   "
},
{
  "id": "thm-linear-transform-volume-scale",
  "level": "2",
  "url": "Section-3-3.html#thm-linear-transform-volume-scale",
  "type": "Theorem",
  "number": "3.21",
  "title": "Volume Scaling by a Linear Transformation.",
  "body": " Volume Scaling by a Linear Transformation   If is the linear transformation defined by , and is any closed shape in , then    "
},
{
  "id": "p-3-3-linear-transformations-5",
  "level": "2",
  "url": "Section-3-3.html#p-3-3-linear-transformations-5",
  "type": "Example",
  "number": "3.22",
  "title": "",
  "body": "  Find the area of the interior of the ellipse defined by the equation .    Below, we have included a graph of the ellipse in the -plane.    A drawing of the described ellipse in the standard coordinate system.   It is difficult to find the area of this tilted ellipse using geometry. Instead, we will use . We start with a change of variables. Let and . Then, the equation for in terms of and becomes . Note that is the equation for the unit circle which has area .   In order to use , we need to identify a linear transformation which maps the ellipse in the -plane to the unit circle in the -plane. Therefore, we need to find a linear transformation which accepts a point on and returns a point on . Recalling the definition of and in terms of and , we see that needs to do the following: . It follows that . Therefore, is the linear transformation that maps to .   By , we have that . Since we know has area , we find that . Thus, the area of the ellipse is .   "
},
{
  "id": "thm-cramers-rule",
  "level": "2",
  "url": "Section-3-3.html#thm-cramers-rule",
  "type": "Theorem",
  "number": "3.23",
  "title": "Cramer’s Rule.",
  "body": " Cramer's Rule   Let be an invertible matrix and let . Then the system has the unique solution whose entires are given by , where is the matrix formed by replacing the column of by .   "
},
{
  "id": "handout-section-3-3-area-volume-determinants-5-4",
  "level": "2",
  "url": "Section-3-3.html#handout-section-3-3-area-volume-determinants-5-4",
  "type": "Example",
  "number": "3.24",
  "title": "",
  "body": "  Use Cramer's Rule to solve the system .    Let . Expanding down the first column of , we see that . Therefore, is invertible matrix, so the system has a unique solution and we can use Cramer's Rule.   We find by replacing the first column of with : . By expanding down the first column of , we see that . It follows that .   We find by replacing the second column of with : . Expanding across the third row yields . It follows that .   We find by replacing the third column of with : . Expanding across the third row yields . It follows that .   Therefore, we have that the solution vector is .   "
},
{
  "id": "Section-4-9",
  "level": "1",
  "url": "Section-4-9.html",
  "type": "Section",
  "number": "",
  "title": "4.9\/5.9 Markov Chains",
  "body": " 4.9\/5.9 Markov Chains   4.9\/5.9 Markov Chains   Overview   Topics   Markov chains  Steady-state vectors  Convergence     Goals   Construct stochastic matrices and probability vectors.  Model and solve real-world problems using Markov chains (e.g., compute steady-state vectors).  Determine whether a stochastic matrix is regular.       A small town has two libraries, and .    After 1 month, among the books checked out from :   80% return to  20% return to     After 1 month, among the books checked out from :   30% return to  70% return to       Two-state Markov chain diagram with transitions between libraries with probabilities 0.8, 0.2, 0.3, and 0.7 representing book returns.   If both libraries start with 1000 books today, how many books does each library have after 1 month?    After 1 month, Library will receive of the books that were in Library and of the books that were in Library . Therefore, we have that the number of books in Library after 1 month is: . After 1 month, Library will receive of the books that were in Library and of the books that were in Library . Therefore, we have that the number of books in Library after 1 month is: .      Example 1 continued    Let and be the same libraries from .     Let be the vector which gives how many books are in libraries and after months. What are and ?    We have and .      Find the matrix so that     Let be the matrix with the distribution probabilities from Library in column 1 and the distribution probabilities from Library in column 2; that is, let . Then we have that .      How many books does each library contain after months; that is, what is ?    Since multiplication by models the change from to , it follows that multiplication by should model the change from to . Therfore, we have that . Thus, after 2 months, Library will contain 1150 books and Library will contain 850 books.      How many books does each library contain after months?    Note that an alternative way to calculate is . If we wanted to calculate , we could do something similar, like . It follows that . In most examples, will be difficult to calculate for large . Usually, we are more interested in what happens in the long term, so we are interested in finding .      What if each library had started with books instead of books. Would change? What would be the new ?    Note that models the distribution of books and has nothing to do with the specific number of books. Therefore, would remain the same, regardless of how many books start off in Library and Library .  Since is one-tenth that of , the only change for would be scaling by a factor of ; that is, the new would be . Note that for either version of , the proportion of books in each library stays the same even if the actual number changes. Therefore, in general, it will be okay to simply determine how acts on vectors which keep track of proportion of books between the libraries instead of specific numbers.        Markov Chains: Definitions    A few important definitions:  A probability vector is a vector whose entries are nonnegative and sum to 1.  A stochastic matrix is a square matrix whose columns are probability vectors.  A Markov chain is a sequence of probability vectors satisfying for a stochastic matrix .  A steady-state vector for is a probability vector such that .       Suppose the Markov chain converges to the vector . Then we have that . Note that . Therefore, if the Markov chain converges to some vector , we have , so is a steady-state vector for .  As you might imagine, calculating the limit might be quite difficult. However, if we know that the Markov chain converges and we find that there is only a single steady-state vector for , then that unique steady-state vector must be the limit! This is how we will find the limit of a Markov chain.  One thing to note is that in the event where there is a unique steady-state vector (which will be most examples in MATH 1554), the choice of starting probabiility vector will NOT change the limit vector .      Determine a steady-state vector for the stochastic matrix:     We want to find a probability vector so that . We can rearrage this equation by subtracting from both sides and factoring to obtain the following equation: , where we rewrote as to make clear what is left over after factoring out . It follows that should be a probability vector that lives in . Note that . Since has only one free variable, we know that . Therefore, is spanned by a single nonzero vector. By inspecting the REF of given above, we see that is a nonzero vector in . Therefore, we have that . Note that is not a probability vector since its entries add to 5. We can modify by scaling it by a factor of which will result in a probability vector living in . Since this is the only way to create a probability vector in , we see that is the unique steady-state vector for . We can check that is a steady-state vector. Note that .  What does the steady-state vector tells us about the libraries in ? It tells us the proportional distribution of the books between the two libraries. Since the two libraries had a total of 2000 books between them, we see that the limit vector of the Markov chain is . Thus, after many months, we should expect Library to have 1200 books and Library to have 800 books.       Convergence and Regular Matrices   Regular Stochastic Matrix   A stochastic matrix is regular if some power has all entries strictly positive.      Convergence Theorem   If is a regular stochastic matrix, then has a unique steady-state vector , and the sequence converges to as .     In , the probability vectors form the line segment between and . A stochastic matrix maps probability vectors to probability vectors, and the iterates converge to the steady state.    Diagram showing convergence of 2D stochastic vectors to a steady state.  Illustration of several probability vectors in , under repeated multiplication by a regular stochastic matrix, converging to a steady-state vector.      Example 3: Car Rental Network    A rental company has three locations A, B, and C. Cars may be returned to any location. The table gives the weekly rental\/return pattern:    Three-state Markov chain diagram with transitions between rental companies. The probabilities are as follows: A to A is 0.8, A to B is 0.2, A to C is 0, B to A is 0.1, B to B is 0.6, B to C is 0.3, C to A is 0.2, C to B is 0.3, C to C is 0.5.  There are 18 cars at each location today.     Construct the stochastic matrix . Is regular?    We can build the following table describing how the cars move between the three rental companies.    rented from    A B C    A .8 .1 .2    returned to B .2 .6 .3    C .0 .3 .5    It follows that . Since has at least one entry which is 0, it is not clear whether is regular or not. By , in order to show is regular, we need to show that some power of has no entries which are 0. Note that Since every entry of is positive, we have that is regular. Therefore, guarantees that has a unique steady-state vector.      Determine what happens to the distribution of cars after a long time.    Again, we need to find a probability vector in Note that     Again, we have that only has a single free variable, so which means that will have a unique steady-state vector. We start by finding some nonzero vector in . Since is a free variable, we set . Then the second row gives . The first row gives . Letting , we see that . Since the entries of add to 27, we have that is the unique steady-state vector of . It follows that the limit vector is an appropriate multiple of . Since we started with a total of cars, we have that . Therefore, after a long time, Location A will have 22 cars, Location B will have 20 cars, and Location C will have 12 cars.       "
},
{
  "id": "obj-4-9-topics-goals",
  "level": "2",
  "url": "Section-4-9.html#obj-4-9-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Markov chains  Steady-state vectors  Convergence   "
},
{
  "id": "p-4-9-objectives-3",
  "level": "2",
  "url": "Section-4-9.html#p-4-9-objectives-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Construct stochastic matrices and probability vectors.  Model and solve real-world problems using Markov chains (e.g., compute steady-state vectors).  Determine whether a stochastic matrix is regular.   "
},
{
  "id": "ex-4-9-libraries",
  "level": "2",
  "url": "Section-4-9.html#ex-4-9-libraries",
  "type": "Example",
  "number": "4.1",
  "title": "",
  "body": "  A small town has two libraries, and .    After 1 month, among the books checked out from :   80% return to  20% return to     After 1 month, among the books checked out from :   30% return to  70% return to       Two-state Markov chain diagram with transitions between libraries with probabilities 0.8, 0.2, 0.3, and 0.7 representing book returns.   If both libraries start with 1000 books today, how many books does each library have after 1 month?    After 1 month, Library will receive of the books that were in Library and of the books that were in Library . Therefore, we have that the number of books in Library after 1 month is: . After 1 month, Library will receive of the books that were in Library and of the books that were in Library . Therefore, we have that the number of books in Library after 1 month is: .   "
},
{
  "id": "handout-section-4-9-markov-3-2",
  "level": "2",
  "url": "Section-4-9.html#handout-section-4-9-markov-3-2",
  "type": "Example",
  "number": "4.2",
  "title": "",
  "body": "  Let and be the same libraries from .     Let be the vector which gives how many books are in libraries and after months. What are and ?    We have and .      Find the matrix so that     Let be the matrix with the distribution probabilities from Library in column 1 and the distribution probabilities from Library in column 2; that is, let . Then we have that .      How many books does each library contain after months; that is, what is ?    Since multiplication by models the change from to , it follows that multiplication by should model the change from to . Therfore, we have that . Thus, after 2 months, Library will contain 1150 books and Library will contain 850 books.      How many books does each library contain after months?    Note that an alternative way to calculate is . If we wanted to calculate , we could do something similar, like . It follows that . In most examples, will be difficult to calculate for large . Usually, we are more interested in what happens in the long term, so we are interested in finding .      What if each library had started with books instead of books. Would change? What would be the new ?    Note that models the distribution of books and has nothing to do with the specific number of books. Therefore, would remain the same, regardless of how many books start off in Library and Library .  Since is one-tenth that of , the only change for would be scaling by a factor of ; that is, the new would be . Note that for either version of , the proportion of books in each library stays the same even if the actual number changes. Therefore, in general, it will be okay to simply determine how acts on vectors which keep track of proportion of books between the libraries instead of specific numbers.    "
},
{
  "id": "p-4-9-markov-definitions-2",
  "level": "2",
  "url": "Section-4-9.html#p-4-9-markov-definitions-2",
  "type": "Definition",
  "number": "4.3",
  "title": "",
  "body": "  A few important definitions:  A probability vector is a vector whose entries are nonnegative and sum to 1.  A stochastic matrix is a square matrix whose columns are probability vectors.  A Markov chain is a sequence of probability vectors satisfying for a stochastic matrix .  A steady-state vector for is a probability vector such that .     "
},
{
  "id": "ex-4-9-steady",
  "level": "2",
  "url": "Section-4-9.html#ex-4-9-steady",
  "type": "Example",
  "number": "4.4",
  "title": "",
  "body": "  Determine a steady-state vector for the stochastic matrix:     We want to find a probability vector so that . We can rearrage this equation by subtracting from both sides and factoring to obtain the following equation: , where we rewrote as to make clear what is left over after factoring out . It follows that should be a probability vector that lives in . Note that . Since has only one free variable, we know that . Therefore, is spanned by a single nonzero vector. By inspecting the REF of given above, we see that is a nonzero vector in . Therefore, we have that . Note that is not a probability vector since its entries add to 5. We can modify by scaling it by a factor of which will result in a probability vector living in . Since this is the only way to create a probability vector in , we see that is the unique steady-state vector for . We can check that is a steady-state vector. Note that .  What does the steady-state vector tells us about the libraries in ? It tells us the proportional distribution of the books between the two libraries. Since the two libraries had a total of 2000 books between them, we see that the limit vector of the Markov chain is . Thus, after many months, we should expect Library to have 1200 books and Library to have 800 books.   "
},
{
  "id": "def-regular-stochastic",
  "level": "2",
  "url": "Section-4-9.html#def-regular-stochastic",
  "type": "Definition",
  "number": "4.5",
  "title": "Regular Stochastic Matrix.",
  "body": " Regular Stochastic Matrix   A stochastic matrix is regular if some power has all entries strictly positive.   "
},
{
  "id": "thm-regular-converges",
  "level": "2",
  "url": "Section-4-9.html#thm-regular-converges",
  "type": "Theorem",
  "number": "4.6",
  "title": "Convergence Theorem.",
  "body": " Convergence Theorem   If is a regular stochastic matrix, then has a unique steady-state vector , and the sequence converges to as .   "
},
{
  "id": "ex-4-9-cars",
  "level": "2",
  "url": "Section-4-9.html#ex-4-9-cars",
  "type": "Example",
  "number": "4.7",
  "title": "",
  "body": "  A rental company has three locations A, B, and C. Cars may be returned to any location. The table gives the weekly rental\/return pattern:    Three-state Markov chain diagram with transitions between rental companies. The probabilities are as follows: A to A is 0.8, A to B is 0.2, A to C is 0, B to A is 0.1, B to B is 0.6, B to C is 0.3, C to A is 0.2, C to B is 0.3, C to C is 0.5.  There are 18 cars at each location today.     Construct the stochastic matrix . Is regular?    We can build the following table describing how the cars move between the three rental companies.    rented from    A B C    A .8 .1 .2    returned to B .2 .6 .3    C .0 .3 .5    It follows that . Since has at least one entry which is 0, it is not clear whether is regular or not. By , in order to show is regular, we need to show that some power of has no entries which are 0. Note that Since every entry of is positive, we have that is regular. Therefore, guarantees that has a unique steady-state vector.      Determine what happens to the distribution of cars after a long time.    Again, we need to find a probability vector in Note that     Again, we have that only has a single free variable, so which means that will have a unique steady-state vector. We start by finding some nonzero vector in . Since is a free variable, we set . Then the second row gives . The first row gives . Letting , we see that . Since the entries of add to 27, we have that is the unique steady-state vector of . It follows that the limit vector is an appropriate multiple of . Since we started with a total of cars, we have that . Therefore, after a long time, Location A will have 22 cars, Location B will have 20 cars, and Location C will have 12 cars.    "
},
{
  "id": "Section-5-1",
  "level": "1",
  "url": "Section-5-1.html",
  "type": "Section",
  "number": "",
  "title": "5.1 Eigenvectors, Eigenvalues, and Eigenspaces",
  "body": " 5.1 Eigenvectors, Eigenvalues, and Eigenspaces   5.1 Eigenvectors, Eigenvalues, and Eigenspaces   Overview   Topics   Eigenvectors, eigenvalues, and eigenspaces.  Eigenvalue theorems.     Goals   Verify that a given vector is an eigenvector of a matrix.  Verify that a given scalar is an eigenvalue of a matrix.  Construct the eigenspace for a given eigenvalue of a matrix.  Apply eigenvalue theorems (e.g., to characterize invertibility).      Eigenvector and Eigenvalue   Let . If there exists a nonzero vector and a scalar such that   then is an eigenvector of and is the corresponding eigenvalue .    Notes:   We consider only square matrices.   If , then:  for , vectors and point in the same direction;  for , they point in opposite directions.     Even when entries of and are real, can be complex (e.g., a rotation by counterclockwise in has no real eigenvalues).  Complex eigenvalues will be explored in Section 5.5.      Example 1    Which of the following are eigenvectors of   What are the corresponding eigenvalues?          Note that . Since , we have that is an eigenvector of corresponding to an eigenvalue of .           Note that . Since , we have that is an eigenvector of corresponding to an eigenvalue of . Note that it is okay if the result of is . That does not break the definition of eigenvector. The problems is when .           Since , forbids from being an eigenvector. The reason why is that for every single , thus making every single real number an eigenvalue of no matter the square matrix . We don't want this to happen since we want eigenvalues to be rare. That is why we forbid from being considered an eigenvector.        Example 2    Confirm that is an eigenvalue of     To show that is an eigenvalue of , we need to find a nonzero vector so that . Subtracting from both sides and factoring yields . Therefore, every which satisfies must live in .  Note: This should look very similar to the process for finding steady-state vectors for stochastic matrices. See . This is because steady-state vectors of a stochastic matrix are actually just probability eigenvectors of which correspond to an eigenvalue of .  Note that . By observation, we see that is a nonzero vector in Since only had a single free varible, we know that is 1-dimensional. Thus, we have that the eigenvectors of which correspond to an eigenvalue of are the nonzero vectors in .  Let's check this for a particular nonzero vector in . Let Note that . Thus, is an eigenvector of corresponding to an eigenvalue of .       Eigenspaces   Eigenspace   Suppose . For an eigenvalue of , the set of all eigenvectors associated with together with the zero vector forms a subspace of called the -eigenspace of .     Note: The -eigenspace is precisely .     Construct a basis for the eigenspaces of     Similar to the solution of , for each suspected eigenvalue , we need to find a nonzero vector in .   Note that . By observation, we see that . Since had a single free variable, we have that . Therefore, the is 1-dimensional, so is a basis for . Furthermore, .  Before moving on to the next eigenvalue, it is always a good idea to double-check that really is an eigenvector of corresponding to . Note that , which confirms that is an eigenvector of corresponding to an eigenvalue of .   Note that . By observation, we see that . Since had a single free variable, we have that . Therefore, the is 1-dimensional, so is a basis for . Furthermore, .  Again, it is wise to double check that is an eigenvector for corresponding to . Note that , which confirms that is an eigenvector for corresponding to an eigenvalue of .       Eigenvalue Theorems   Eigenvalues of Triangular Matrices   The eigenvalues of a triangular (upper or lower) matrix are its diagonal entries.      Invertibility and the Eigenvalue 0   A matrix is invertible if and only if is not an eigenvalue of .      Stochastic Matrices   A (column-)stochastic matrix always has an eigenvalue equal to .      Distinct Eigenvalues Give Independent Eigenvectors   If are eigenvectors corresponding to distinct eigenvalues of , then is linearly independent.       Warning: Row Reduction and Eigenvalues   Warning   You cannot determine the eigenvalues of a matrix from its reduced row-echelon form. Row operations generally change eigenvalues.      Let which has eigenvalues and .     Find eigenvectors for each eigenvalue of .     Note that . By inspection, we see that is an eigenvector of corresponding to an eigenvalue of . Furthermore, we have that    Note that . By inspection, we see that is an eigenvector of corresponding to an eigenvalue of . Furthermore, we have that   These calculations confirm what we saw in .      Find the RREF of . What are it's eigenvalues?    Note that . From , we see that the eigenalues of are . Note that is an eigenvalue of , but is not an eigenvalue of .        One more Example   Converse of   The converse of is the following:  If are linearly independent eigenvectors of , then must correspond to different eigenvalues.  This statement is false . See below.      Let One of the eigenvalues of is . Find a basis for the -eigenspace of .    Note that . Since has two free variables, we have that . Therefore, is two-dimensional, so we need to find two linearly independent vectors in in order to find a basis for the eigenspace. You could find two such vectors by guessing, which isn't necessarily easy but does become easier with time. Or, you could find two vectors by using our typical process of setting and which yield and . Either way, we find that a basis for is . You should double-check that these two vectors are linearly independent and belong to . It follows that       "
},
{
  "id": "obj-5-1-topics-goals",
  "level": "2",
  "url": "Section-5-1.html#obj-5-1-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Eigenvectors, eigenvalues, and eigenspaces.  Eigenvalue theorems.   "
},
{
  "id": "p-5-1-overview-3",
  "level": "2",
  "url": "Section-5-1.html#p-5-1-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Verify that a given vector is an eigenvector of a matrix.  Verify that a given scalar is an eigenvalue of a matrix.  Construct the eigenspace for a given eigenvalue of a matrix.  Apply eigenvalue theorems (e.g., to characterize invertibility).   "
},
{
  "id": "def-eigenvalue-eigenvector",
  "level": "2",
  "url": "Section-5-1.html#def-eigenvalue-eigenvector",
  "type": "Definition",
  "number": "5.1",
  "title": "Eigenvector and Eigenvalue.",
  "body": " Eigenvector and Eigenvalue   Let . If there exists a nonzero vector and a scalar such that   then is an eigenvector of and is the corresponding eigenvalue .   "
},
{
  "id": "ex-5-1-check-eigenvectors",
  "level": "2",
  "url": "Section-5-1.html#ex-5-1-check-eigenvectors",
  "type": "Example",
  "number": "5.2",
  "title": "",
  "body": "  Which of the following are eigenvectors of   What are the corresponding eigenvalues?          Note that . Since , we have that is an eigenvector of corresponding to an eigenvalue of .           Note that . Since , we have that is an eigenvector of corresponding to an eigenvalue of . Note that it is okay if the result of is . That does not break the definition of eigenvector. The problems is when .           Since , forbids from being an eigenvector. The reason why is that for every single , thus making every single real number an eigenvalue of no matter the square matrix . We don't want this to happen since we want eigenvalues to be rare. That is why we forbid from being considered an eigenvector.    "
},
{
  "id": "ex-5-1-confirm-eigenvalue",
  "level": "2",
  "url": "Section-5-1.html#ex-5-1-confirm-eigenvalue",
  "type": "Example",
  "number": "5.3",
  "title": "",
  "body": "  Confirm that is an eigenvalue of     To show that is an eigenvalue of , we need to find a nonzero vector so that . Subtracting from both sides and factoring yields . Therefore, every which satisfies must live in .  Note: This should look very similar to the process for finding steady-state vectors for stochastic matrices. See . This is because steady-state vectors of a stochastic matrix are actually just probability eigenvectors of which correspond to an eigenvalue of .  Note that . By observation, we see that is a nonzero vector in Since only had a single free varible, we know that is 1-dimensional. Thus, we have that the eigenvectors of which correspond to an eigenvalue of are the nonzero vectors in .  Let's check this for a particular nonzero vector in . Let Note that . Thus, is an eigenvector of corresponding to an eigenvalue of .   "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "Section-5-1.html#def-eigenspace",
  "type": "Definition",
  "number": "5.4",
  "title": "Eigenspace.",
  "body": " Eigenspace   Suppose . For an eigenvalue of , the set of all eigenvectors associated with together with the zero vector forms a subspace of called the -eigenspace of .   "
},
{
  "id": "ex-5-1-eigenspace-basis",
  "level": "2",
  "url": "Section-5-1.html#ex-5-1-eigenspace-basis",
  "type": "Example",
  "number": "5.5",
  "title": "",
  "body": "  Construct a basis for the eigenspaces of     Similar to the solution of , for each suspected eigenvalue , we need to find a nonzero vector in .   Note that . By observation, we see that . Since had a single free variable, we have that . Therefore, the is 1-dimensional, so is a basis for . Furthermore, .  Before moving on to the next eigenvalue, it is always a good idea to double-check that really is an eigenvector of corresponding to . Note that , which confirms that is an eigenvector of corresponding to an eigenvalue of .   Note that . By observation, we see that . Since had a single free variable, we have that . Therefore, the is 1-dimensional, so is a basis for . Furthermore, .  Again, it is wise to double check that is an eigenvector for corresponding to . Note that , which confirms that is an eigenvector for corresponding to an eigenvalue of .   "
},
{
  "id": "thm-triangular-diagonal-are-eigs",
  "level": "2",
  "url": "Section-5-1.html#thm-triangular-diagonal-are-eigs",
  "type": "Theorem",
  "number": "5.6",
  "title": "Eigenvalues of Triangular Matrices.",
  "body": " Eigenvalues of Triangular Matrices   The eigenvalues of a triangular (upper or lower) matrix are its diagonal entries.   "
},
{
  "id": "thm-invertible-iff-zero-not-eigenvalue",
  "level": "2",
  "url": "Section-5-1.html#thm-invertible-iff-zero-not-eigenvalue",
  "type": "Theorem",
  "number": "5.7",
  "title": "Invertibility and the Eigenvalue 0.",
  "body": " Invertibility and the Eigenvalue 0   A matrix is invertible if and only if is not an eigenvalue of .   "
},
{
  "id": "thm-stochastic-has-one",
  "level": "2",
  "url": "Section-5-1.html#thm-stochastic-has-one",
  "type": "Theorem",
  "number": "5.8",
  "title": "Stochastic Matrices.",
  "body": " Stochastic Matrices   A (column-)stochastic matrix always has an eigenvalue equal to .   "
},
{
  "id": "thm-distinct-eigenvalues-independent",
  "level": "2",
  "url": "Section-5-1.html#thm-distinct-eigenvalues-independent",
  "type": "Theorem",
  "number": "5.9",
  "title": "Distinct Eigenvalues Give Independent Eigenvectors.",
  "body": " Distinct Eigenvalues Give Independent Eigenvectors   If are eigenvectors corresponding to distinct eigenvalues of , then is linearly independent.   "
},
{
  "id": "warn-row-reduction-eigs",
  "level": "2",
  "url": "Section-5-1.html#warn-row-reduction-eigs",
  "type": "Note",
  "number": "5.10",
  "title": "Warning.",
  "body": " Warning   You cannot determine the eigenvalues of a matrix from its reduced row-echelon form. Row operations generally change eigenvalues.   "
},
{
  "id": "p-5-1-warning-3",
  "level": "2",
  "url": "Section-5-1.html#p-5-1-warning-3",
  "type": "Example",
  "number": "5.11",
  "title": "",
  "body": "  Let which has eigenvalues and .     Find eigenvectors for each eigenvalue of .     Note that . By inspection, we see that is an eigenvector of corresponding to an eigenvalue of . Furthermore, we have that    Note that . By inspection, we see that is an eigenvector of corresponding to an eigenvalue of . Furthermore, we have that   These calculations confirm what we saw in .      Find the RREF of . What are it's eigenvalues?    Note that . From , we see that the eigenalues of are . Note that is an eigenvalue of , but is not an eigenvalue of .    "
},
{
  "id": "note-conv-lin-ind-eigs",
  "level": "2",
  "url": "Section-5-1.html#note-conv-lin-ind-eigs",
  "type": "Note",
  "number": "5.12",
  "title": "Converse of Theorem 5.9.",
  "body": " Converse of   The converse of is the following:  If are linearly independent eigenvectors of , then must correspond to different eigenvalues.  This statement is false . See below.   "
},
{
  "id": "ex-2-dim-eigenspace",
  "level": "2",
  "url": "Section-5-1.html#ex-2-dim-eigenspace",
  "type": "Example",
  "number": "5.13",
  "title": "",
  "body": "  Let One of the eigenvalues of is . Find a basis for the -eigenspace of .    Note that . Since has two free variables, we have that . Therefore, is two-dimensional, so we need to find two linearly independent vectors in in order to find a basis for the eigenspace. You could find two such vectors by guessing, which isn't necessarily easy but does become easier with time. Or, you could find two vectors by using our typical process of setting and which yield and . Either way, we find that a basis for is . You should double-check that these two vectors are linearly independent and belong to . It follows that    "
},
{
  "id": "Section-5-2",
  "level": "1",
  "url": "Section-5-2.html",
  "type": "Section",
  "number": "",
  "title": "5.2 The Characteristic Equation",
  "body": " 5.2 The Characteristic Equation   5.2 The Characteristic Equation   Overview   Topics   The characteristic polynomial of a matrix  Algebraic and geometric multiplicity of eigenvalues     Goals   Construct the characteristic polynomial of a matrix and use it to identify eigenvalues and their multiplicities.  Characterize the long-term behaviour of dynamical systems using eigenvalue decompositions.      Similar matrices are introduced in Section 5.2, but are not used until Section 5.3. We will wait to introduce them in Section 5.3.    Recall:   is an eigenvalue of if and only if is not invertible .  Therefore, to calculate the eigenvalues of , we can need to find all so that    The quantity is the characteristic polynomial of .  The equation is the characteristic equation of .  The roots of the characteristic polynomial are the eigenvalues of .      Characteristic Polynomial of a 2×2 Matrix    Find the characteristic polynomial of   Then determine the eigenvalues of .    Note that   Therefore, the characteristic polynomial of is . We know from that the roots of this polynomial are the eigenvalues of . Since the polynomial doesn't factor nicely, we use the quadratic formula to find the eigenvalues: . Therefore, the eigenvalues of are and .       Let   Express the characteristic equation of in terms of . What is the equation when is singular?    Note that   We see that the constant term of the characteristic polynomial is . Furthermore, the linear coefficient is , where is the trace of and is the sum of its diagonal elements. When is singular, we have , so the characteristic polynomial is , which has a factor of . Therefore, we see that is an eigenvalue of .  Suppose and are the eigenvalues of . Then, we have that . It follows that is the sum of the eigenvalues of and is the product of the eigenvalues of . This is no coincidence and is true for all matrices.       Algebraic Multiplicity    Let be an matrix with eigenvalues . Then, and .      Algebraic Multiplicity   The algebraic multiplicity of an eigenvalue is its multiplicity as a root of the characteristic polynomial.      Compute the algebraic multiplicities of the eigenvalues for     Note that   It follows that is an eigenvalue of with algebraic multiplicity equal to 1 and is an eigenvalue of with algebraic multiplicity equal to 1. Since the characteristic polynomials has a factor of , we see that is an eigenvalue of with algebraic multiplicity equal to 2.       Geometric Multiplicity   Geometric Multiplicity   The geometric multiplicity of an eigenvalue is the dimension of .      The geometric multiplicity of an eigenvalue is always between 1 and the algebraic multiplicity of . It can never be 0 nor be greater than the algebraic mutliplicy.  Basic example: has only eigenvalue . Its algebraic multiplicity is 2, but its geometric multiplicity is 1.      Compute the geometric multiplicities of the eigenvalues for     As we saw in , the eigenvalues of are (with algebraic multiplicity = 1), (with algebraic multiplicity = 1), and (with algebraic multiplicity = 2). For , we see that which has a single free variable. Thus, the geometric multiplicity of is 1 (which is actually forced since the geometric multiplicity has to be between 1 and the algebraic multiplicity which was also 1 for this eigenvalue). By similar reasoning, we see that the geometric multiplicity of is 1.  Now consider . The algebraic multiplicity of is 2. Therefore, the geometric multiplicity could be 1 or 2. Note that which has a single free variable. Therefore, the geometric multiplicity for is 1, not 2.         For each part below, give an example of a matrix withe the stated properties, if possible.     The only eigenvalue is , but the geometric multiplicity of is one.    For simplicity, we will attempt to form an upper triangular matrix with the properties. This makes things easier since we know that the eigenvalues of a triangular matrix are exactly the entries on the diagonal. Therefore, each diagonal element of our upper triangular matrix needs to be 0. This leads us to where the blank entries are undecided. So far, we have guaranteed that every eigenvalue of is . Now, we need to force to have geometric multiplicity equal to 1. This means that the matrix needs to have exactly one free variable. Note that, as is, Column 1 of already corresponds to a free variable. Thus, we need to make sure that Columns 2, 3, 4, and 5 are pivot columns. To do that, we need to put nonzero entries directly above the diagonal entry. This give the matrix . We can fill in the remaining entries with whatever we want and will still have the required properties.      The only eigenvalues are and . The algebraic multiplicity of is three and the geometric multiplicity of is three.    We can proceed in a similar manner to . Since has algebraic multiplicity 3, we must list it three times on the diagonal. We can fill in the remaining two entries on the diagonal with the other eigenvalue . This gives us . Note that is supposed to have the geometric multiplicity of to be 3. Unfortunately, the algebraic multiplicity of is 2. So it is impossible to have the geometric multiplicity of to be 3 since the geometric multiplicity of an eigenvalue can never exceed its algebraic multiplicity. It follows that creating a matrix with the desired properties is impossible. It would require at least a matrix.      Exactly three eigenvalues, all with geometric multiplicity equal to 1.    Note that the two matrices below both satisfy the requirement and have eigenvalues . .        Example: Eigenvalues and a 2-State Markov Chain    Consider the Markov Chain given by     Two-state Markov chain with symmetric transition probabilities.  Nodes A and B with transitions 0.6 for staying and 0.4 for switching; matrix .   In the parts below, we will use eigenvalues to describe the long-term behavior of the system.     Find the eigenvalues of and corresponding eigenvectors.    Note that and . It follows by the result in that the characteristic polynomial of is . Setting the characteristic polynomial equal to 0, multiplying both sides by 5, and factoring yields: . Therefore, the eigenvalues of are and . (We knew that had to be an eigenvalue of since is a stochastic matrix.)  For , note that . It follows that a nonzero vector in is . Furthermore, since had a single free variable, we have that .  For , note that . It follows that a nonzero vector in is . Furthermore, since had a single free variable, we have that .      Use the eigenvalues and eigenvectors to determine what tends to as .    Note that , where and are eigenvectors corresponding to and , respectively. Note that , where we replaced with and replaced with since and are eigenvectors of . Similarly, we have that , and in general, since and are eigenvectors of . Similarly, we have that . Therefore, we have that .        Additional Examples (if time permits)   True or False: A row replacement operation on a matrix does not change its eigenvalues.   False. Note that the matrix has eigenvalues (check this), but doing the row replacement yields the matrix , which has eigenvalues .       For what values of does the matrix have one real eigenvalue with algebraic multiplicity 2?     Note that the characteristic polynomial of is   Since we want to have a single eigenvalue with algebraic multiplicity 2, we want the characteristic polynomial of to be of the form . Therefore, setting the linear coefficients of the two polynomials equal, we find . Setting the constants of the two polynomials equal, we see that   Therefore, if , then will have a single real eigenvalue with algebraic multiplicity 2.      "
},
{
  "id": "obj-5-2-topics-goals",
  "level": "2",
  "url": "Section-5-2.html#obj-5-2-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The characteristic polynomial of a matrix  Algebraic and geometric multiplicity of eigenvalues   "
},
{
  "id": "p-5-2-overview-3",
  "level": "2",
  "url": "Section-5-2.html#p-5-2-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Construct the characteristic polynomial of a matrix and use it to identify eigenvalues and their multiplicities.  Characterize the long-term behaviour of dynamical systems using eigenvalue decompositions.   "
},
{
  "id": "p-5-2-overview-5",
  "level": "2",
  "url": "Section-5-2.html#p-5-2-overview-5",
  "type": "Note",
  "number": "5.14",
  "title": "",
  "body": " Similar matrices are introduced in Section 5.2, but are not used until Section 5.3. We will wait to introduce them in Section 5.3.  "
},
{
  "id": "def-characteristic",
  "level": "2",
  "url": "Section-5-2.html#def-characteristic",
  "type": "Definition",
  "number": "5.15",
  "title": "",
  "body": " The quantity is the characteristic polynomial of .  The equation is the characteristic equation of .  The roots of the characteristic polynomial are the eigenvalues of .  "
},
{
  "id": "ex-5-2-charpoly-specific",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-charpoly-specific",
  "type": "Example",
  "number": "5.16",
  "title": "",
  "body": "  Find the characteristic polynomial of   Then determine the eigenvalues of .    Note that   Therefore, the characteristic polynomial of is . We know from that the roots of this polynomial are the eigenvalues of . Since the polynomial doesn't factor nicely, we use the quadratic formula to find the eigenvalues: . Therefore, the eigenvalues of are and .   "
},
{
  "id": "ex-5-2-charpoly-2x2-general",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-charpoly-2x2-general",
  "type": "Example",
  "number": "5.17",
  "title": "",
  "body": "  Let   Express the characteristic equation of in terms of . What is the equation when is singular?    Note that   We see that the constant term of the characteristic polynomial is . Furthermore, the linear coefficient is , where is the trace of and is the sum of its diagonal elements. When is singular, we have , so the characteristic polynomial is , which has a factor of . Therefore, we see that is an eigenvalue of .  Suppose and are the eigenvalues of . Then, we have that . It follows that is the sum of the eigenvalues of and is the product of the eigenvalues of . This is no coincidence and is true for all matrices.   "
},
{
  "id": "thm-det-prod-eigs",
  "level": "2",
  "url": "Section-5-2.html#thm-det-prod-eigs",
  "type": "Theorem",
  "number": "5.18",
  "title": "",
  "body": "  Let be an matrix with eigenvalues . Then, and .   "
},
{
  "id": "def-algebraic-multiplicity",
  "level": "2",
  "url": "Section-5-2.html#def-algebraic-multiplicity",
  "type": "Definition",
  "number": "5.19",
  "title": "Algebraic Multiplicity.",
  "body": " Algebraic Multiplicity   The algebraic multiplicity of an eigenvalue is its multiplicity as a root of the characteristic polynomial.   "
},
{
  "id": "ex-5-2-alg-mult-compute",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-alg-mult-compute",
  "type": "Example",
  "number": "5.20",
  "title": "",
  "body": "  Compute the algebraic multiplicities of the eigenvalues for     Note that   It follows that is an eigenvalue of with algebraic multiplicity equal to 1 and is an eigenvalue of with algebraic multiplicity equal to 1. Since the characteristic polynomials has a factor of , we see that is an eigenvalue of with algebraic multiplicity equal to 2.   "
},
{
  "id": "def-geometric-multiplicity",
  "level": "2",
  "url": "Section-5-2.html#def-geometric-multiplicity",
  "type": "Definition",
  "number": "5.21",
  "title": "Geometric Multiplicity.",
  "body": " Geometric Multiplicity   The geometric multiplicity of an eigenvalue is the dimension of .   "
},
{
  "id": "ex-5-2-geom-mult-compute",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-geom-mult-compute",
  "type": "Example",
  "number": "5.22",
  "title": "",
  "body": "  Compute the geometric multiplicities of the eigenvalues for     As we saw in , the eigenvalues of are (with algebraic multiplicity = 1), (with algebraic multiplicity = 1), and (with algebraic multiplicity = 2). For , we see that which has a single free variable. Thus, the geometric multiplicity of is 1 (which is actually forced since the geometric multiplicity has to be between 1 and the algebraic multiplicity which was also 1 for this eigenvalue). By similar reasoning, we see that the geometric multiplicity of is 1.  Now consider . The algebraic multiplicity of is 2. Therefore, the geometric multiplicity could be 1 or 2. Note that which has a single free variable. Therefore, the geometric multiplicity for is 1, not 2.   "
},
{
  "id": "ex-5-2-only-zero-eig-gm1",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-only-zero-eig-gm1",
  "type": "Example",
  "number": "5.23",
  "title": "",
  "body": "  For each part below, give an example of a matrix withe the stated properties, if possible.     The only eigenvalue is , but the geometric multiplicity of is one.    For simplicity, we will attempt to form an upper triangular matrix with the properties. This makes things easier since we know that the eigenvalues of a triangular matrix are exactly the entries on the diagonal. Therefore, each diagonal element of our upper triangular matrix needs to be 0. This leads us to where the blank entries are undecided. So far, we have guaranteed that every eigenvalue of is . Now, we need to force to have geometric multiplicity equal to 1. This means that the matrix needs to have exactly one free variable. Note that, as is, Column 1 of already corresponds to a free variable. Thus, we need to make sure that Columns 2, 3, 4, and 5 are pivot columns. To do that, we need to put nonzero entries directly above the diagonal entry. This give the matrix . We can fill in the remaining entries with whatever we want and will still have the required properties.      The only eigenvalues are and . The algebraic multiplicity of is three and the geometric multiplicity of is three.    We can proceed in a similar manner to . Since has algebraic multiplicity 3, we must list it three times on the diagonal. We can fill in the remaining two entries on the diagonal with the other eigenvalue . This gives us . Note that is supposed to have the geometric multiplicity of to be 3. Unfortunately, the algebraic multiplicity of is 2. So it is impossible to have the geometric multiplicity of to be 3 since the geometric multiplicity of an eigenvalue can never exceed its algebraic multiplicity. It follows that creating a matrix with the desired properties is impossible. It would require at least a matrix.      Exactly three eigenvalues, all with geometric multiplicity equal to 1.    Note that the two matrices below both satisfy the requirement and have eigenvalues . .    "
},
{
  "id": "ex-5-2-markov-eigs",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-markov-eigs",
  "type": "Example",
  "number": "5.24",
  "title": "",
  "body": "  Consider the Markov Chain given by     Two-state Markov chain with symmetric transition probabilities.  Nodes A and B with transitions 0.6 for staying and 0.4 for switching; matrix .   In the parts below, we will use eigenvalues to describe the long-term behavior of the system.     Find the eigenvalues of and corresponding eigenvectors.    Note that and . It follows by the result in that the characteristic polynomial of is . Setting the characteristic polynomial equal to 0, multiplying both sides by 5, and factoring yields: . Therefore, the eigenvalues of are and . (We knew that had to be an eigenvalue of since is a stochastic matrix.)  For , note that . It follows that a nonzero vector in is . Furthermore, since had a single free variable, we have that .  For , note that . It follows that a nonzero vector in is . Furthermore, since had a single free variable, we have that .      Use the eigenvalues and eigenvectors to determine what tends to as .    Note that , where and are eigenvectors corresponding to and , respectively. Note that , where we replaced with and replaced with since and are eigenvectors of . Similarly, we have that , and in general, since and are eigenvectors of . Similarly, we have that . Therefore, we have that .    "
},
{
  "id": "ex-5-2-true-false",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-true-false",
  "type": "Example",
  "number": "5.25",
  "title": "",
  "body": " True or False: A row replacement operation on a matrix does not change its eigenvalues.   False. Note that the matrix has eigenvalues (check this), but doing the row replacement yields the matrix , which has eigenvalues .   "
},
{
  "id": "ex-5-2-parameterized-eig",
  "level": "2",
  "url": "Section-5-2.html#ex-5-2-parameterized-eig",
  "type": "Example",
  "number": "5.26",
  "title": "",
  "body": "  For what values of does the matrix have one real eigenvalue with algebraic multiplicity 2?     Note that the characteristic polynomial of is   Since we want to have a single eigenvalue with algebraic multiplicity 2, we want the characteristic polynomial of to be of the form . Therefore, setting the linear coefficients of the two polynomials equal, we find . Setting the constants of the two polynomials equal, we see that   Therefore, if , then will have a single real eigenvalue with algebraic multiplicity 2.   "
},
{
  "id": "Section-5-3",
  "level": "1",
  "url": "Section-5-3.html",
  "type": "Section",
  "number": "",
  "title": "5.3 Diagonalization",
  "body": " 5.3 Diagonalization   5.3 Diagonalization   Overview   Motivation: It can be useful to take large powers of matrices, for example for large .   But: Multiplying two matrices requires roughly computations.   Question: Is there a more efficient way to compute ?    Topics   Similar matrices  Diagonal, similar, and diagonalizable matrices  Diagonalizing matrices     Goals   Determine whether a matrix can be diagonalized, and if possible diagonalize a square matrix.  Apply diagonalization to compute matrix powers.      Similarity   Two matrices and are similar if there exists an invertible matrix such that    Matrix similarity is an equivalence relation meaning:    Reflexive Property : Every matrix is similar to itself.   Proof: Let be any matrix and let . Then . Thus, is similar to .      Symmetric Property : If is similar to , then is similar to .   Proof: Suppose for some invertible matrix . By multiplying both sides of the equation by on the left and on the right we get . Letting , we have that , so is similar to .      Transitive Property : If is similar to and is similar to , then is similar to .   Proof: Suppose and . Then we have that , so is similar to .          Characteristic Polynomial of Similar Matrices   If and are similar, then they have the same characteristic polynomial.    Recall that and are the characteristic polynomials of and , respectively. Since and are similar, we have that for some invertible matrix . Note the following:     Thus, , so and have the same characteristic polynomial.     Notes:  Similar matrices have exactly the same eigenvalues with exactly the same algebraic multiplicity for each eigenvalue and exactly the same geometric multiplicity for each eigenvalue.  The converse of is not true; that is, just because two matrices have the same characterisitc polynomial, that does not mean that they are similar. For example, have the same characteristic polynomial, but are not similar because the eigenvalue does not have the same geometric multiplicty for each matrix.       True or false: If is similar to the identity matrix, then is equal to the identity matrix.    If is similar to , then there exists an invertible matrix so that . Thus, must be the identity matrix.       Diagonal Matrices   Diagonal Matrix   A matrix is diagonal if the only nonzero entries (if any) lie on the main diagonal. In this course, we work only with square diagonal matrices.    Examples of diagonal matrices:    If is diagonal, then is easy to compute by raising diagonal entries to the -th power.   Example: Powers of a Diagonal Matrix    Let . Compute and .    Note that . It follows that       Is this as easy to do if is not diagonal?    Let . Then . There is no apparant pattern like there is when is diagonal.      What about if is similar to a diagonal matrix?    Suppose for some invertible matrix and some diagonal matrix . Note that . It follows that . Therefore, if we know that is similar to a diagonal matrix, then we can calculate power of much faster than expected.        Diagonalization   Diagonalizable Matrix   A matrix is diagonalizable if it is similar to a diagonal matrix ; that is, there exists an invertible matrix such that      First, let's identify . Since is diagonal, every entry not on the diagonal must be zero. Therefore, to identify , we need to identify the entries on the diagonal. By , and must have the same characteristic polynomial. Thus, they must have the same eigenvalues. Since is diagonal, it is both upper and lower triangular. Therefore, by , the eigenvalues of are the entries on the diagonal. Hence, the eigenvalues of must be the diagonal entries of . So, if the eigenvalues of are (listing repeated eigenvalues the appropriate number of times), then    Caution 1 : The above reasoning assumes that the matrix has real eigenvalues (counting multiplicity). What if has fewer than eigenvalues. For example, if , then has ZERO real eigenvalues (check this). If has fewer than eigenvalues, then we WILL NOT be able to fill all the missing entries of . We couldn't just fill the gaps with 0's because that would imply that had more 0 eigenvalues than . Therefore, in the case where has fewer than eigenvalues; that is, when the algebraic multiplicities of the eigenvalues add up to less than , then it is IMPOSSIBLE to form . Thus, would NOT be diagonalizable.   Assuming we can find , we now need to find . Let . Then, we can rearrange the equation my multiplying by on the right of both sides to get . Note that and . Since , we can set corresponding columns equal to each other to find . Since (else would not be invertible) we have that the columns must be eigenvectors of corresponding to !   Caution 2 : Note that would fail to be invertible if the columns were linearly independent. Therefore, we must have that the vectors are linearly independent. Are we guaranteed to be able to find linearly independent eigenvectors? This is only possible if every eigenspace is as big as it is supposed to be. For example, if the eigenvalue has algebraic multiplicity 3, then we expect the -eigenspace to be 3-dimensional. If it is not, then it is impossible for us to find 3 linearly independent eigenvectors corresponding to . Therefore, it would be impossible to form since must contain linearly independent vectors to match with the  's which are on the diagonal of . Recall that the dimension of the eigenspace is the geometric multiplicity. Therefore, we are unable to find an invertible when any eigenvalue has geometric multiplicity less than its algebraic multiplicity. If that happens for any of the eigenvalues, then is NOT diagonalizable.      Characterizing Diagonalizability   Diagonalization Criterion   A matrix is diagonalizable if and only if has linearly independent eigenvectors. Equivalently,   where are linearly independent eigenvectors and are the corresponding eigenvalues (in order).      Algebraic vs. Geometric Multiplicity   Suppose:   is ,  has distinct eigenvalues with ,  is the algebraic multiplicity of ,  is the geometric multiplicity (dimension of the -eigenspace).   Then:   for all .   is diagonalizable for all .   is diagonalizable the eigenvectors for all eigenvalues together form a basis of .       Diagonalization with Distinct Eigenvalues   If is and has distinct eigenvalues, then is diagonalizable.         Diagonalize if possible:     First, note that by we have that the eigenvalues of are with algebraic multiplicity 2. Since we have two eigenvalues (counting algebraic multiplicity) and since is a matrix, we know that we can form .  Next, we need to check if we can form which, by , requires that the geometric multiplicity of is the same as the algebraic multiplicity, so 2. Note that which only has a single free variable. It follows that the geometric multiplicity of is only 1. More precisely, we have that . Notice, this does not give enough linearly independent eigenvectors to form . Therefore, is not diagonalizable.       Example 2: Diagonalize if Possible    Diagonalize if possible:     Again, we can use to see that the eigenvalues of are and with both having algebraic multiplicty of 1. By , we know that must be diagonalizable. Let's find linearly independent eigenvectors corresponding to each eigenvalue.  For , we see that It follows that .  For , we see that It follows that .  Since we have found 2 linearly independent eigenvectors, one corresponding to and one corresponding to , we can form and . Let . Note that there are many correct choices for . The only criteria for is that the first column contains an eigenvector corresponding to the first eigenvalue listed in and the second column contains an eigenvector corresponding to the second eigenvalue listed in . You don't have to use the eigenvectors found above. Also, you are free to swap the order of the eigenvalues in , this would just require that you also switch the columns of .  We can check our solution by calculating . For a matrix, this isn't so bad. However, if the matrices were or higher, calculating could be annoying. So, instead of checking , it is equivalent to check as long as is invertible (which it better be). Note that and . Since and since is diagonal and is invertible, our choice of and is a valid diagonalization of .       Example 3: Build P and D    The eigenvalues of are . If possible, construct and such that . Verify by checking that .     We are given that and are the eigenvalues of . If both have algebraic multiplicity of 1, then is NOT diagonalizable since doesn't have enough eigenvalues. Let's calculate the geometric multiplicities of each eigenvalue and see if that sheds some light on the algebraic multiplicities.  For , note that which has two free variables. It follows that . Thus, the geometric multiplicity of is 2, which means the algebraic multiplicity of is 2 as well.  For , note that . It follows that .  Thus, we have that is a possible diagonalization of . As mentioned in previous examples, this is not the only possible diagonalization of . You could swap around the eigenvalues on the diagonal of and the corresponding eigenvectors in or you could replace some of the eigenvectors in with other eigenvectors corresponding to the same eigenvalue as the previous and still linearly independent to the other columns. For example, the following is another possible diagonalization of : . Checking, we see that and . Since , this is a valid diagonalization of .       Example 3: Build P and D    Diagonalize the following matrix, if possible.     First, we find the eigenvalues of . Note that     Exanding across Row 2 yeilds:     It follows that the eigenvalues of are with algebraic multiplicity of 2 and with algebraic multiplicity of 1. Since is a matrix and we found eigenvalues (counting multiplicites), we can form . Now let's see if we can form .  For , note that which only has a single free variable. Therefore, the eigenvalue has algebraic multiplicity of 2 but geometric multiplicity of 1. Thus, is NOT diagonalizable.       Additional Example (if time permits)   Diagonalization and a Famous Sequence   Note that   generates a well-known sequence of numbers. Use diagonalization to find a matrix expression that gives the -th number in this sequence.    First, let us generate several term so of the sequence . Let . It follows that for all . Note the following:     Notice that the top entry of is the bottom entry of . Writing down the entries, but removing that repetition, we obtain the sequence of integers . This is a very famous sequence called the Fibonacci Sequence, which is defined as the recursive sequence with and . We see that and since by definition.   Suppose we are interested in finding . Using either the recursive definition or the formula would require first finding and , which would in turn require finding and and so on and so forth. This is not fast nor practical for when n is large. What we would prefer is to find an explicit formula for which only depends on . Thankfully, we can use diagonalization to accomplish this since . Note that if is diagonalizable, then for some diagonal matrix and invertible matrix . Then we have that . Let's find and .  We start by finding the eigenvalues of . Note that the characteristic polynomial of is . Using the quadratic formula, we see that the roots of this polynomial, and therefore the eigenvalues of , are .   Next, we find eigenvectors corresponding to each eigenvalue. Note that . Therefore, we see that is an eigenvector of corresponding to . We can check this. Note that .   Now, we find an eigenvector for . Note that . It follows that is an eigenvector of corresponding to . Feel free to check this.   It follows that is a valid diagonalization of . Before calculating , let's simplify a bit by replacing all references of with and all references of with . Then, we have that our diagonalization is . It follows that . We can check our diagonalization before moving on. Note that     since and .   Now, we find a formula for . Note that      By comparing the top entries, we see that . Since and , we find that is an explicit formula for . Feel free to use Desmos and check this formula for various values of .      "
},
{
  "id": "obj-5-3-topics-goals",
  "level": "2",
  "url": "Section-5-3.html#obj-5-3-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Similar matrices  Diagonal, similar, and diagonalizable matrices  Diagonalizing matrices   "
},
{
  "id": "p-5-3-overview-7",
  "level": "2",
  "url": "Section-5-3.html#p-5-3-overview-7",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Determine whether a matrix can be diagonalized, and if possible diagonalize a square matrix.  Apply diagonalization to compute matrix powers.   "
},
{
  "id": "def-similar-matrices",
  "level": "2",
  "url": "Section-5-3.html#def-similar-matrices",
  "type": "Definition",
  "number": "5.27",
  "title": "Similarity.",
  "body": " Similarity   Two matrices and are similar if there exists an invertible matrix such that   "
},
{
  "id": "thm-similar-same-charpoly",
  "level": "2",
  "url": "Section-5-3.html#thm-similar-same-charpoly",
  "type": "Theorem",
  "number": "5.28",
  "title": "Characteristic Polynomial of Similar Matrices.",
  "body": " Characteristic Polynomial of Similar Matrices   If and are similar, then they have the same characteristic polynomial.    Recall that and are the characteristic polynomials of and , respectively. Since and are similar, we have that for some invertible matrix . Note the following:     Thus, , so and have the same characteristic polynomial.   "
},
{
  "id": "handout-section-5-3-diagonalization-3-5",
  "level": "2",
  "url": "Section-5-3.html#handout-section-5-3-diagonalization-3-5",
  "type": "Example",
  "number": "5.29",
  "title": "",
  "body": "  True or false: If is similar to the identity matrix, then is equal to the identity matrix.    If is similar to , then there exists an invertible matrix so that . Thus, must be the identity matrix.   "
},
{
  "id": "def-diagonal-matrix",
  "level": "2",
  "url": "Section-5-3.html#def-diagonal-matrix",
  "type": "Definition",
  "number": "5.30",
  "title": "Diagonal Matrix.",
  "body": " Diagonal Matrix   A matrix is diagonal if the only nonzero entries (if any) lie on the main diagonal. In this course, we work only with square diagonal matrices.   "
},
{
  "id": "ex-5-3-powers-diagonal",
  "level": "2",
  "url": "Section-5-3.html#ex-5-3-powers-diagonal",
  "type": "Example",
  "number": "5.31",
  "title": "Example: Powers of a Diagonal Matrix.",
  "body": " Example: Powers of a Diagonal Matrix    Let . Compute and .    Note that . It follows that       Is this as easy to do if is not diagonal?    Let . Then . There is no apparant pattern like there is when is diagonal.      What about if is similar to a diagonal matrix?    Suppose for some invertible matrix and some diagonal matrix . Note that . It follows that . Therefore, if we know that is similar to a diagonal matrix, then we can calculate power of much faster than expected.    "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "Section-5-3.html#def-diagonalizable",
  "type": "Definition",
  "number": "5.32",
  "title": "Diagonalizable Matrix.",
  "body": " Diagonalizable Matrix   A matrix is diagonalizable if it is similar to a diagonal matrix ; that is, there exists an invertible matrix such that    "
},
{
  "id": "thm-diagonalizable-iff-n-lin-ind-eigenvectors",
  "level": "2",
  "url": "Section-5-3.html#thm-diagonalizable-iff-n-lin-ind-eigenvectors",
  "type": "Theorem",
  "number": "5.33",
  "title": "Diagonalization Criterion.",
  "body": " Diagonalization Criterion   A matrix is diagonalizable if and only if has linearly independent eigenvectors. Equivalently,   where are linearly independent eigenvectors and are the corresponding eigenvalues (in order).   "
},
{
  "id": "thm-diagonalizable-multiplicity-conditions",
  "level": "2",
  "url": "Section-5-3.html#thm-diagonalizable-multiplicity-conditions",
  "type": "Theorem",
  "number": "5.34",
  "title": "Algebraic vs. Geometric Multiplicity.",
  "body": " Algebraic vs. Geometric Multiplicity   Suppose:   is ,  has distinct eigenvalues with ,  is the algebraic multiplicity of ,  is the geometric multiplicity (dimension of the -eigenspace).   Then:   for all .   is diagonalizable for all .   is diagonalizable the eigenvectors for all eigenvalues together form a basis of .    "
},
{
  "id": "thm-n-distinct-eigs-implies-diagonalizable",
  "level": "2",
  "url": "Section-5-3.html#thm-n-distinct-eigs-implies-diagonalizable",
  "type": "Theorem",
  "number": "5.35",
  "title": "Diagonalization with Distinct Eigenvalues.",
  "body": " Diagonalization with Distinct Eigenvalues   If is and has distinct eigenvalues, then is diagonalizable.   "
},
{
  "id": "ex-5-3-diagonalize-1",
  "level": "2",
  "url": "Section-5-3.html#ex-5-3-diagonalize-1",
  "type": "Example",
  "number": "5.36",
  "title": "",
  "body": "  Diagonalize if possible:     First, note that by we have that the eigenvalues of are with algebraic multiplicity 2. Since we have two eigenvalues (counting algebraic multiplicity) and since is a matrix, we know that we can form .  Next, we need to check if we can form which, by , requires that the geometric multiplicity of is the same as the algebraic multiplicity, so 2. Note that which only has a single free variable. It follows that the geometric multiplicity of is only 1. More precisely, we have that . Notice, this does not give enough linearly independent eigenvectors to form . Therefore, is not diagonalizable.   "
},
{
  "id": "ex-5-3-diagonalize-2",
  "level": "2",
  "url": "Section-5-3.html#ex-5-3-diagonalize-2",
  "type": "Example",
  "number": "5.37",
  "title": "",
  "body": "  Diagonalize if possible:     Again, we can use to see that the eigenvalues of are and with both having algebraic multiplicty of 1. By , we know that must be diagonalizable. Let's find linearly independent eigenvectors corresponding to each eigenvalue.  For , we see that It follows that .  For , we see that It follows that .  Since we have found 2 linearly independent eigenvectors, one corresponding to and one corresponding to , we can form and . Let . Note that there are many correct choices for . The only criteria for is that the first column contains an eigenvector corresponding to the first eigenvalue listed in and the second column contains an eigenvector corresponding to the second eigenvalue listed in . You don't have to use the eigenvectors found above. Also, you are free to swap the order of the eigenvalues in , this would just require that you also switch the columns of .  We can check our solution by calculating . For a matrix, this isn't so bad. However, if the matrices were or higher, calculating could be annoying. So, instead of checking , it is equivalent to check as long as is invertible (which it better be). Note that and . Since and since is diagonal and is invertible, our choice of and is a valid diagonalization of .   "
},
{
  "id": "ex-5-3-construct-PD",
  "level": "2",
  "url": "Section-5-3.html#ex-5-3-construct-PD",
  "type": "Example",
  "number": "5.38",
  "title": "",
  "body": "  The eigenvalues of are . If possible, construct and such that . Verify by checking that .     We are given that and are the eigenvalues of . If both have algebraic multiplicity of 1, then is NOT diagonalizable since doesn't have enough eigenvalues. Let's calculate the geometric multiplicities of each eigenvalue and see if that sheds some light on the algebraic multiplicities.  For , note that which has two free variables. It follows that . Thus, the geometric multiplicity of is 2, which means the algebraic multiplicity of is 2 as well.  For , note that . It follows that .  Thus, we have that is a possible diagonalization of . As mentioned in previous examples, this is not the only possible diagonalization of . You could swap around the eigenvalues on the diagonal of and the corresponding eigenvectors in or you could replace some of the eigenvectors in with other eigenvectors corresponding to the same eigenvalue as the previous and still linearly independent to the other columns. For example, the following is another possible diagonalization of : . Checking, we see that and . Since , this is a valid diagonalization of .   "
},
{
  "id": "ex-5-3-diagonalize-3-by-3",
  "level": "2",
  "url": "Section-5-3.html#ex-5-3-diagonalize-3-by-3",
  "type": "Example",
  "number": "5.39",
  "title": "",
  "body": "  Diagonalize the following matrix, if possible.     First, we find the eigenvalues of . Note that     Exanding across Row 2 yeilds:     It follows that the eigenvalues of are with algebraic multiplicity of 2 and with algebraic multiplicity of 1. Since is a matrix and we found eigenvalues (counting multiplicites), we can form . Now let's see if we can form .  For , note that which only has a single free variable. Therefore, the eigenvalue has algebraic multiplicity of 2 but geometric multiplicity of 1. Thus, is NOT diagonalizable.   "
},
{
  "id": "ex-5-3-fibonacci",
  "level": "2",
  "url": "Section-5-3.html#ex-5-3-fibonacci",
  "type": "Example",
  "number": "5.40",
  "title": "Diagonalization and a Famous Sequence.",
  "body": " Diagonalization and a Famous Sequence   Note that   generates a well-known sequence of numbers. Use diagonalization to find a matrix expression that gives the -th number in this sequence.    First, let us generate several term so of the sequence . Let . It follows that for all . Note the following:     Notice that the top entry of is the bottom entry of . Writing down the entries, but removing that repetition, we obtain the sequence of integers . This is a very famous sequence called the Fibonacci Sequence, which is defined as the recursive sequence with and . We see that and since by definition.   Suppose we are interested in finding . Using either the recursive definition or the formula would require first finding and , which would in turn require finding and and so on and so forth. This is not fast nor practical for when n is large. What we would prefer is to find an explicit formula for which only depends on . Thankfully, we can use diagonalization to accomplish this since . Note that if is diagonalizable, then for some diagonal matrix and invertible matrix . Then we have that . Let's find and .  We start by finding the eigenvalues of . Note that the characteristic polynomial of is . Using the quadratic formula, we see that the roots of this polynomial, and therefore the eigenvalues of , are .   Next, we find eigenvectors corresponding to each eigenvalue. Note that . Therefore, we see that is an eigenvector of corresponding to . We can check this. Note that .   Now, we find an eigenvector for . Note that . It follows that is an eigenvector of corresponding to . Feel free to check this.   It follows that is a valid diagonalization of . Before calculating , let's simplify a bit by replacing all references of with and all references of with . Then, we have that our diagonalization is . It follows that . We can check our diagonalization before moving on. Note that     since and .   Now, we find a formula for . Note that      By comparing the top entries, we see that . Since and , we find that is an explicit formula for . Feel free to use Desmos and check this formula for various values of .   "
},
{
  "id": "Section-5-5",
  "level": "1",
  "url": "Section-5-5.html",
  "type": "Section",
  "number": "",
  "title": "5.5 Complex Eigenvalues",
  "body": " 5.5 Complex Eigenvalues   5.5 Complex Eigenvalues   Overview   Topics   Complex numbers: addition, multiplication, complex conjugate  Complex eigenvalues and eigenvectors  Eigenvalue theorems     Goals   Use eigenvalues to identify the rotation and dilation of a linear transform.  Recognize rotation–dilation matrices.  Find complex eigenvalues and eigenvectors of a real matrix.  Apply theorems to characterize matrices with complex eigenvalues.       Consider the linear transformation which rotates vectors counterclockwise by 90 .     Find the matrix so that .    Note that and . Therefore, we have that .      Find the characteristic polynomial of .    Note that .      What are the eigenvalues of ?    Note that the quadratic equation has no real roots since trying to solve the equation yields and is not a real number. If we want to \"fix\" this, we can define and say that and are the two Complex roots of the polynomial .         Complex Numbes   The complex numbers are denoted by , where     We can identify with via .   We can add and multiply complex numbers by treating as variable and simplifying powers of appropriately.    Let and let . Calculate the following:     Sum of complex numbers:     Note that .      Product of complex numbers:     Using the distributive property, we have . Since , we have that . Therefore, .        Complex Conjugate, Absolute Value, and Polar Form   Complex Conjugate   The conjugate of is .      Absolute Value (Modulus)   The absolute value (modulus) of is .       The polar form of a complex number is , where and is the argument.    Note that Euler's formula was used which says . This is a beautiful result that can be proven using the Power Series for the three functions involved.       Given , compute , , and the polar form of .    Note that the conjuage of is . The modulus of is . To find the polar form of , we first find the angle . Note that . Therefore, we have that .        Conjugate Properties   Let and ., Then we have the following properties:    (for a real matrix )        Conjugation reflects points across the real axis.    Diagram showing complex conjugation as reflection over real axis.  The point at angle reflects to at angle across the real axis.      Euler’s Formula and Products in Polar Form  Suppose has angle and has angle ; that is, let and . Note that Therefore, the product has modulus and has angle .    Angles in polar form for complex numbers and their product.  Vectors representing , , and their product with angles adding: .      Complex Numbers and Polynomials   Fundamental Theorem of Algebra   Every polynomial of degree has exactly complex roots, counting multiplicity.      Conjugate Pairs for Real Coefficients    If is a root of a real polynomial , then the conjugate is also a root of .  If is an eigenvalue of a real matrix with eigenvector , then is an eigenvalue of with eigenvector .        Four eigenvalues of a real matrix are , , , and . What are the other eigenvalues?    By and , we know that has 7 eigenvalues, counting multiplicites. We have been told 4 of them. Note that for each complex eigenvalues, it's complex conjugate must also be an eigenvalue. Therefore, we have that the eigenvalues are , and and and are the 7 eigenvalues of .       Rotation–Dilation Matrices and Eigenvalues    The matrix that rotates vectors by about the origin and then scales by is   Find the eigenvalues of and one eigenvector for each eigenvalue.    Note that . Using the quadratic formula, we find the eigenvalues of are . Let and . Note that these are conjuage pairs as suggested by .  Note that can be written in polar form as . We see that gives the scaling factor of and gives the rotation factor of .  Now, let's find at least one eigenvector for each eigenvalue. For , we have . At first glance, might not appear to have a free variable. Hopefully it does, or else we made an error somewhere. Note that we can still use row operations on even though it contains complex numbers. This, hopefully, will expose the dependency of the columns. Note that . Now, we see that . Let's check that . Note that and , so .  By , we have that is an eigenvector for .       General Rotation–Dilation Form  The previous example is a special case of the real rotation–dilation matrix .    Compute the eigenvalues of   and express them in the polar form .    Note that . Solving for the eigenvalues, we see that . Therefore, and are the two eigenvalues of . Writing these in polar form, we have that . Similar to the eigenvalues found in , we see that is the scaling factor of and is the rotation factor of .       Finding Complex Eigenpairs    Find the complex eigenvalues and an associated complex eigenvector for each eigenvalue of     Note that . Using the quadratic formula, we see that the eigenvalues of are .  Let . Then we have that . It follows that is an eigenvector corresponding to . Check this.  Let . By , we see that is an eigenvector corresponding to .      "
},
{
  "id": "obj-5-5-topics-goals",
  "level": "2",
  "url": "Section-5-5.html#obj-5-5-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Complex numbers: addition, multiplication, complex conjugate  Complex eigenvalues and eigenvectors  Eigenvalue theorems   "
},
{
  "id": "p-5-5-overview-3",
  "level": "2",
  "url": "Section-5-5.html#p-5-5-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Use eigenvalues to identify the rotation and dilation of a linear transform.  Recognize rotation–dilation matrices.  Find complex eigenvalues and eigenvectors of a real matrix.  Apply theorems to characterize matrices with complex eigenvalues.   "
},
{
  "id": "p-5-5-overview-5",
  "level": "2",
  "url": "Section-5-5.html#p-5-5-overview-5",
  "type": "Example",
  "number": "5.41",
  "title": "",
  "body": "  Consider the linear transformation which rotates vectors counterclockwise by 90 .     Find the matrix so that .    Note that and . Therefore, we have that .      Find the characteristic polynomial of .    Note that .      What are the eigenvalues of ?    Note that the quadratic equation has no real roots since trying to solve the equation yields and is not a real number. If we want to \"fix\" this, we can define and say that and are the two Complex roots of the polynomial .    "
},
{
  "id": "def-complex-numbers",
  "level": "2",
  "url": "Section-5-5.html#def-complex-numbers",
  "type": "Definition",
  "number": "5.42",
  "title": "Complex Numbes.",
  "body": " Complex Numbes   The complex numbers are denoted by , where    "
},
{
  "id": "ex-5-5-add-mul",
  "level": "2",
  "url": "Section-5-5.html#ex-5-5-add-mul",
  "type": "Example",
  "number": "5.43",
  "title": "",
  "body": "  Let and let . Calculate the following:     Sum of complex numbers:     Note that .      Product of complex numbers:     Using the distributive property, we have . Since , we have that . Therefore, .    "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "Section-5-5.html#def-conjugate",
  "type": "Definition",
  "number": "5.44",
  "title": "Complex Conjugate.",
  "body": " Complex Conjugate   The conjugate of is .   "
},
{
  "id": "def-abs",
  "level": "2",
  "url": "Section-5-5.html#def-abs",
  "type": "Definition",
  "number": "5.45",
  "title": "Absolute Value (Modulus).",
  "body": " Absolute Value (Modulus)   The absolute value (modulus) of is .   "
},
{
  "id": "def-polar-form",
  "level": "2",
  "url": "Section-5-5.html#def-polar-form",
  "type": "Definition",
  "number": "5.46",
  "title": "",
  "body": "  The polar form of a complex number is , where and is the argument.    Note that Euler's formula was used which says . This is a beautiful result that can be proven using the Power Series for the three functions involved.   "
},
{
  "id": "ex-5-5-conj-mod-polar",
  "level": "2",
  "url": "Section-5-5.html#ex-5-5-conj-mod-polar",
  "type": "Example",
  "number": "5.47",
  "title": "",
  "body": "  Given , compute , , and the polar form of .    Note that the conjuage of is . The modulus of is . To find the polar form of , we first find the angle . Note that . Therefore, we have that .   "
},
{
  "id": "thm-conjugate-properties",
  "level": "2",
  "url": "Section-5-5.html#thm-conjugate-properties",
  "type": "Theorem",
  "number": "5.48",
  "title": "Conjugate Properties.",
  "body": " Conjugate Properties   Let and ., Then we have the following properties:    (for a real matrix )      "
},
{
  "id": "thm-fta",
  "level": "2",
  "url": "Section-5-5.html#thm-fta",
  "type": "Theorem",
  "number": "5.49",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra   Every polynomial of degree has exactly complex roots, counting multiplicity.   "
},
{
  "id": "thm-conjugate-roots",
  "level": "2",
  "url": "Section-5-5.html#thm-conjugate-roots",
  "type": "Theorem",
  "number": "5.50",
  "title": "Conjugate Pairs for Real Coefficients.",
  "body": " Conjugate Pairs for Real Coefficients    If is a root of a real polynomial , then the conjugate is also a root of .  If is an eigenvalue of a real matrix with eigenvector , then is an eigenvalue of with eigenvector .    "
},
{
  "id": "ex-5-5-complete-eigs",
  "level": "2",
  "url": "Section-5-5.html#ex-5-5-complete-eigs",
  "type": "Example",
  "number": "5.51",
  "title": "",
  "body": "  Four eigenvalues of a real matrix are , , , and . What are the other eigenvalues?    By and , we know that has 7 eigenvalues, counting multiplicites. We have been told 4 of them. Note that for each complex eigenvalues, it's complex conjugate must also be an eigenvalue. Therefore, we have that the eigenvalues are , and and and are the 7 eigenvalues of .   "
},
{
  "id": "ex-5-5-rot-dil-eigs",
  "level": "2",
  "url": "Section-5-5.html#ex-5-5-rot-dil-eigs",
  "type": "Example",
  "number": "5.52",
  "title": "",
  "body": "  The matrix that rotates vectors by about the origin and then scales by is   Find the eigenvalues of and one eigenvector for each eigenvalue.    Note that . Using the quadratic formula, we find the eigenvalues of are . Let and . Note that these are conjuage pairs as suggested by .  Note that can be written in polar form as . We see that gives the scaling factor of and gives the rotation factor of .  Now, let's find at least one eigenvector for each eigenvalue. For , we have . At first glance, might not appear to have a free variable. Hopefully it does, or else we made an error somewhere. Note that we can still use row operations on even though it contains complex numbers. This, hopefully, will expose the dependency of the columns. Note that . Now, we see that . Let's check that . Note that and , so .  By , we have that is an eigenvector for .   "
},
{
  "id": "ex-5-5-C-eigs-polar-1",
  "level": "2",
  "url": "Section-5-5.html#ex-5-5-C-eigs-polar-1",
  "type": "Example",
  "number": "5.53",
  "title": "",
  "body": "  Compute the eigenvalues of   and express them in the polar form .    Note that . Solving for the eigenvalues, we see that . Therefore, and are the two eigenvalues of . Writing these in polar form, we have that . Similar to the eigenvalues found in , we see that is the scaling factor of and is the rotation factor of .   "
},
{
  "id": "ex-5-5-complex-eigs",
  "level": "2",
  "url": "Section-5-5.html#ex-5-5-complex-eigs",
  "type": "Example",
  "number": "5.54",
  "title": "",
  "body": "  Find the complex eigenvalues and an associated complex eigenvector for each eigenvalue of     Note that . Using the quadratic formula, we see that the eigenvalues of are .  Let . Then we have that . It follows that is an eigenvector corresponding to . Check this.  Let . By , we see that is an eigenvector corresponding to .   "
},
{
  "id": "Section-6-1",
  "level": "1",
  "url": "Section-6-1.html",
  "type": "Section",
  "number": "",
  "title": "6.1 Dot Product, Length, and Orthogonality",
  "body": " 6.1 Dot Product, Length, and Orthogonality   6.1 Dot Product, Length, and Orthogonality   Overview   Topics   Dot product of vectors  Magnitude of vectors and distances in  Orthogonal vectors and complements  Angles between vectors     Goals   Compute (a) dot products, (b) magnitudes, (c) distances in , and (d) angles between vectors.  Apply theorems involving orthogonal complements, row\/column space, and their relationships to linear systems.    Motivating Question  For a matrix , which vectors are orthogonal to all the rows of ? To the columns of ?    Dot Product   The dot product of two vectors is:       For what values of is ?     Note that . It follows that if and only if .       Properties of the Dot Product   Basic Identities of the Dot Product   Let and .   (Symmetry) .  (Linearity) .  (Scalars) .  (Positivity) , and it equals 0 if and only if .       Length (Magnitude)   The length , or magnitude , of is       Compute where .   Sketch of the point (1,3,2) in 3-space.      Note that . It follows that .       Example: Length of a Sum    Let , , and . Compute .    Using , see that . Note that squaring both sides of the equation yields . Also, note that the dot product is commutative. Thus, we have that .     For any vector and scalar ,    Unit Vector   A vector of length 1 is called a unit vector .    Examples of unit vectors:      Distance in   Distance   For , the distance between them is       Compute the distance between and .    Note that       Orthogonal Vectors   Two vectors are orthogonal if .  This is equivalent to     Proof: The equivalent statement, known as the Pythagorean Theorem, is true since since because the vectors are orthogonal.    The zero vector is orthogonal to every vector in .    Example: Orthogonal Subspace in    Sketch the set of all vectors orthogonal to .   Sketch of the vector v in coordinate plane.      Let . Note that . Therefore, geometrically, we can describe the set of all vectors which are orthogonal to as the line . Algebraically, the set of vectors which are orthogonal to is given by . It is no coincidence that this set is a subspace. (See .)      Orthogonal Complement   If is a subspace of , a vector is orthogonal to if for every . The set of all such vectors is the orthogonal complement :   The set is also a subspace of . We have that . Furthermore, for any subspace , we have that .      Suppose . Find .    NOte that . It follows that . Note that if and only if is orthogonal to every vector in . Since every vector in is a multiple of , we have that is orthogonal to every vector of as long as it is orthogonal to . Note that . It follows that for . Thus, .      Example: Plane Orthogonal to a Line in    Let be the line spanned by . Since is 1-dimensional, its orthogonal complement is a plane. Find an equation for the plane .   Graph of a line L in 3-space passing through the origin and the point (1,-1,2).      First, note that by , we have that . Thus, the space really is a plane in . Let . Note that . Thus, we have that .      Row Space   The row space is the subspace spanned by the rows of a matrix .    Facts:   .  A basis for is given by the pivot rows of .  In general, and are unrelated spaces.      Row Space    Describe in terms of an orthogonal subspace.    if and only if .       This means is to each row of .  orthogonal    Therefore is of .  the orthogonal complement     .           The Four Subspaces   For any :   is the orthogonal complement of :   is the orthogonal complement of :      This geometric structure is often shown using overlapping regions representing the four fundamental subspaces.   Visual representation of the four subspaces from the Four Subspace Theorem       Angles Between Vectors   Dot Product and Angle   The dot product satisfies   Thus, if , then either one vector is the zero vector or the vectors are orthogonal.    Proof: We will prove this theorem for vectors in . A similar argument can be made for two vectors in by considering them in the plane (or line) which they span.  First, note that if either or , then the equation is true since both the left side and right side are 0. Now suppose and . Then, we know that and . Let's consider the unit vectors and . Since both and are unit vectors in , they both lie on the unit circle. Note that rotating both vectors by the same angle will not change the angle between them. So, let's rotate the vectors so that lies on the positive -axis. (This is similar to choosing a new reference frame in physics). Then, and , where is the angle between and . In this reference frame, we have that . By replacing and with their definitions in terms of and , we see that .      Find the angle between and . Note that is a unit vector.    Note that . Also, note that . Since is a unit vector, we have that . Therefore, we have so . Thus, there is a angle between and .      "
},
{
  "id": "obj-6-1-topics-goals",
  "level": "2",
  "url": "Section-6-1.html#obj-6-1-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Dot product of vectors  Magnitude of vectors and distances in  Orthogonal vectors and complements  Angles between vectors   "
},
{
  "id": "p-6-1-overview-3",
  "level": "2",
  "url": "Section-6-1.html#p-6-1-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Compute (a) dot products, (b) magnitudes, (c) distances in , and (d) angles between vectors.  Apply theorems involving orthogonal complements, row\/column space, and their relationships to linear systems.   "
},
{
  "id": "def-dot-product",
  "level": "2",
  "url": "Section-6-1.html#def-dot-product",
  "type": "Definition",
  "number": "6.1",
  "title": "Dot Product.",
  "body": " Dot Product   The dot product of two vectors is:    "
},
{
  "id": "ex-6-1-dot-zero",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-dot-zero",
  "type": "Example",
  "number": "6.2",
  "title": "",
  "body": "  For what values of is ?     Note that . It follows that if and only if .   "
},
{
  "id": "thm-dot-identities",
  "level": "2",
  "url": "Section-6-1.html#thm-dot-identities",
  "type": "Theorem",
  "number": "6.3",
  "title": "Basic Identities of the Dot Product.",
  "body": " Basic Identities of the Dot Product   Let and .   (Symmetry) .  (Linearity) .  (Scalars) .  (Positivity) , and it equals 0 if and only if .    "
},
{
  "id": "def-length",
  "level": "2",
  "url": "Section-6-1.html#def-length",
  "type": "Definition",
  "number": "6.4",
  "title": "Length (Magnitude).",
  "body": " Length (Magnitude)   The length , or magnitude , of is    "
},
{
  "id": "ex-6-1-length-op",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-length-op",
  "type": "Example",
  "number": "6.5",
  "title": "",
  "body": "  Compute where .   Sketch of the point (1,3,2) in 3-space.      Note that . It follows that .   "
},
{
  "id": "ex-6-1-length-sum",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-length-sum",
  "type": "Example",
  "number": "6.6",
  "title": "",
  "body": "  Let , , and . Compute .    Using , see that . Note that squaring both sides of the equation yields . Also, note that the dot product is commutative. Thus, we have that .   "
},
{
  "id": "def-unit-vector",
  "level": "2",
  "url": "Section-6-1.html#def-unit-vector",
  "type": "Definition",
  "number": "6.7",
  "title": "Unit Vector.",
  "body": " Unit Vector   A vector of length 1 is called a unit vector .   "
},
{
  "id": "def-distance",
  "level": "2",
  "url": "Section-6-1.html#def-distance",
  "type": "Definition",
  "number": "6.8",
  "title": "Distance.",
  "body": " Distance   For , the distance between them is    "
},
{
  "id": "ex-6-1-distance",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-distance",
  "type": "Example",
  "number": "6.9",
  "title": "",
  "body": "  Compute the distance between and .    Note that    "
},
{
  "id": "def-orthogonal",
  "level": "2",
  "url": "Section-6-1.html#def-orthogonal",
  "type": "Definition",
  "number": "6.10",
  "title": "Orthogonal Vectors.",
  "body": " Orthogonal Vectors   Two vectors are orthogonal if .  This is equivalent to     Proof: The equivalent statement, known as the Pythagorean Theorem, is true since since because the vectors are orthogonal.   "
},
{
  "id": "ex-6-1-orth-subspace",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-orth-subspace",
  "type": "Example",
  "number": "6.11",
  "title": "",
  "body": "  Sketch the set of all vectors orthogonal to .   Sketch of the vector v in coordinate plane.      Let . Note that . Therefore, geometrically, we can describe the set of all vectors which are orthogonal to as the line . Algebraically, the set of vectors which are orthogonal to is given by . It is no coincidence that this set is a subspace. (See .)   "
},
{
  "id": "def-orth-complement",
  "level": "2",
  "url": "Section-6-1.html#def-orth-complement",
  "type": "Definition",
  "number": "6.12",
  "title": "Orthogonal Complement.",
  "body": " Orthogonal Complement   If is a subspace of , a vector is orthogonal to if for every . The set of all such vectors is the orthogonal complement :   The set is also a subspace of . We have that . Furthermore, for any subspace , we have that .   "
},
{
  "id": "ex-6-1-col-row-orth",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-col-row-orth",
  "type": "Example",
  "number": "6.13",
  "title": "",
  "body": "  Suppose . Find .    NOte that . It follows that . Note that if and only if is orthogonal to every vector in . Since every vector in is a multiple of , we have that is orthogonal to every vector of as long as it is orthogonal to . Note that . It follows that for . Thus, .   "
},
{
  "id": "ex-6-1-line-plane",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-line-plane",
  "type": "Example",
  "number": "6.14",
  "title": "",
  "body": "  Let be the line spanned by . Since is 1-dimensional, its orthogonal complement is a plane. Find an equation for the plane .   Graph of a line L in 3-space passing through the origin and the point (1,-1,2).      First, note that by , we have that . Thus, the space really is a plane in . Let . Note that . Thus, we have that .   "
},
{
  "id": "def-row-space",
  "level": "2",
  "url": "Section-6-1.html#def-row-space",
  "type": "Definition",
  "number": "6.15",
  "title": "Row Space.",
  "body": " Row Space   The row space is the subspace spanned by the rows of a matrix .   "
},
{
  "id": "ex-6-1-null-row",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-null-row",
  "type": "Example",
  "number": "6.16",
  "title": "",
  "body": "  Describe in terms of an orthogonal subspace.    if and only if .       This means is to each row of .  orthogonal    Therefore is of .  the orthogonal complement     .         "
},
{
  "id": "thm-four-subspaces",
  "level": "2",
  "url": "Section-6-1.html#thm-four-subspaces",
  "type": "Theorem",
  "number": "6.17",
  "title": "The Four Subspaces.",
  "body": " The Four Subspaces   For any :   is the orthogonal complement of :   is the orthogonal complement of :     "
},
{
  "id": "thm-angle",
  "level": "2",
  "url": "Section-6-1.html#thm-angle",
  "type": "Theorem",
  "number": "6.18",
  "title": "Dot Product and Angle.",
  "body": " Dot Product and Angle   The dot product satisfies   Thus, if , then either one vector is the zero vector or the vectors are orthogonal.    Proof: We will prove this theorem for vectors in . A similar argument can be made for two vectors in by considering them in the plane (or line) which they span.  First, note that if either or , then the equation is true since both the left side and right side are 0. Now suppose and . Then, we know that and . Let's consider the unit vectors and . Since both and are unit vectors in , they both lie on the unit circle. Note that rotating both vectors by the same angle will not change the angle between them. So, let's rotate the vectors so that lies on the positive -axis. (This is similar to choosing a new reference frame in physics). Then, and , where is the angle between and . In this reference frame, we have that . By replacing and with their definitions in terms of and , we see that .   "
},
{
  "id": "ex-6-1-angles",
  "level": "2",
  "url": "Section-6-1.html#ex-6-1-angles",
  "type": "Example",
  "number": "6.19",
  "title": "",
  "body": "  Find the angle between and . Note that is a unit vector.    Note that . Also, note that . Since is a unit vector, we have that . Therefore, we have so . Thus, there is a angle between and .   "
},
{
  "id": "Section-6-2",
  "level": "1",
  "url": "Section-6-2.html",
  "type": "Section",
  "number": "",
  "title": "6.2 Orthogonal Sets, Orthogonal Bases, and Projections",
  "body": " 6.2 Orthogonal Sets, Orthogonal Bases, and Projections   6.2 Orthogonal Sets, Orthogonal Bases, and Projections   Overview   Topics   Orthogonal sets of vectors  Orthogonal bases and projections     Goals    Apply orthogonality concepts to:   compute orthogonal projections and distances,  express a vector as a linear combination of orthogonal vectors,  characterize bases for subspaces of ,  construct orthonormal bases.      Motivating Question  What are the special properties of the following basis for ?     Orthogonal Set   A set of vectors is an orthogonal set if whenever .      Fill in missing entries so that is an orthogonal set:     Let represent the missing element in . It follows that .  To find , we need to find a vector that is orthogonal to both and . Note that works since the zero vector is orthogonal to every vector. Usually, we are interested in finding vectors that are linearly independent so that they will form a basis for our space, so let's find a vector other than the zero vector. Let and note that and . It follows that can be any vector in , where . Feel free to find a non-zero vector in by row reducing and following the normal process. Or, you might be able to observe that , which makes it a fine choice for the third vector in the orthogonal set.       Orthogonal Sets Are Linearly Independent   Linear Independence of Orthogonal Sets   If is an orthogonal set of vectors, then:   Furthermore, if all the vectors are nonzero, then the set is linearly independent.      Expansion in an Orthogonal Basis   If is an orthogonal basis for a subspace , then any can be written:   where     Proof: Suppose is an orthogonal basis for a subspace . Then, we know that for each (since this is an orthogonal set) and (since ). Let . Then, can be expressed uniquely as a linear combination of the basis vectors; that is for a unique choice of . Note what happens if we dot product both sides of the above equation with for some : It follows that . Since , we divide both sides by that quantity to get .       Example: Expansion in an Orthogonal Basis    Let and let be the subspace of that is orthogonal to .     Check that forms an orthogonal basis for .    First, we show that is an orthogonal set . Note that . Therefore, and are orthogonal, so is an orthogonal set.  Next, we show that is a basis for . From the description of , we see that . Using the two results given in , we see that . Therefore, a basis for must contain two linearly independent vectors that live in . We can see that and since they are not multiples of one another. Another way to see this is that non-zero orthogonal vectors are always linearly independent. Lastly, we need to show that and actually live in . Note that Thus, is orthogonal to and is orthogonal to . Hence, , so is a basis for . Since was also an orthogonal set, it is an orthogonal basis for .      Verify that .    Note that , so is orthogonal to . Thus, .      Compute the expansion of in the basis .    Since and since is a basis for , we know there exists a unique choice of so that . Since is an orthogonal basis for , we can use to find and . Therefore, we have that , which can be easily checked.        Orthogonal Projections   Orthogonal Projection   For a nonzero vector and vector , the orthogonal projection of onto is:       Diagram showing projection of vector onto a line.  Visualization of as the closest point in the span of to .     Let be a nonzero vector. Then, the vector is the vector in which is closest to . Also, the vector is orthogonal to . Furthermore, .      Let and . Write as the sum of two orthogonal vectors, one in and one orthogonal to .    We want to find vectors and so that . Note that this is exactly what projection will give me. We have that . From , we see that is the vector in which is closest to . To find , we use and find that . We see that . Therefore, is a decomposition of into two vectors, one living in and the other living in . We will see in that this decomposition is unique.       Example: Projection onto a Line    Let be the line spanned by .     Find the projection of onto the line .    Note that . There isn't anything too special about . Now, if we had instead gotten , then we would learn that , so is the vector in which is closest to .      How close is to the line ?    Note that the vector keeps track of how far away is from the line . It follows that the distance is from is given by .       Orthonormal Basis   An orthonormal basis for a subspace is an orthogonal basis in which each vector has length 1.     Expansion in an Orthonormal Basis   If is orthonormal basis for and , then   and     Proof: The first result is a direct corollary of since for each , we have that because is a unit vector.        Let . Find the missing entries in an orthonormal basis for :   Then, express as a linear combination of and .    Let . In order for , we see that the missing entry must be . Since the vector has magnitude , we see that . We need to choose so that it is orthogonal to (which verifies that ) and orthogonal to (since we want an orthonormal basis). By observation, we see that the vector satisfies the orthogonality conditions. Since that vector has length , we choose .  By , we have that . Checking, we see that        Orthogonal Matrices   Orthogonal Matrix   An orthogonal matrix is a square matrix whose columns are orthonormal.      An matrix has orthonormal columns if and only if .    Can have orthonormal columns if ?   Suppose has more columns than rows. The, we know that  cannot have a pivot in each column. Therefore, the columns of are linearly dependent . The only way they can form an orthogonal set is if the columns corresponding to free variables are the zero vector. However, this makes it impossible for each column to have length 1. Therefore, a matrix with more columns than rows can never have orthonormal columns.     Mapping Properties of Orthogonal Matrices   If is an orthogonal matrix, then:    Preserves angles:  .  Using the defintion of dot product ( ), we see that . By , we see that . Therefore, .     Preserves length:  .  This is a direct consequence of using and the above result with and itself.     Preserves orthogonality.   This is direct consequence of and (a) above.        Example   Compute the length of     Note that the matrix is a matrix with orthonormal columns. Therefore, we can use (b) to find that       "
},
{
  "id": "obj-6-2-topics-goals",
  "level": "2",
  "url": "Section-6-2.html#obj-6-2-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Orthogonal sets of vectors  Orthogonal bases and projections   "
},
{
  "id": "p-6-2-overview-3",
  "level": "2",
  "url": "Section-6-2.html#p-6-2-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals    Apply orthogonality concepts to:   compute orthogonal projections and distances,  express a vector as a linear combination of orthogonal vectors,  characterize bases for subspaces of ,  construct orthonormal bases.     "
},
{
  "id": "def-orthogonal-set",
  "level": "2",
  "url": "Section-6-2.html#def-orthogonal-set",
  "type": "Definition",
  "number": "6.20",
  "title": "Orthogonal Set.",
  "body": " Orthogonal Set   A set of vectors is an orthogonal set if whenever .   "
},
{
  "id": "ex-6-2-complete-orth-set",
  "level": "2",
  "url": "Section-6-2.html#ex-6-2-complete-orth-set",
  "type": "Example",
  "number": "6.21",
  "title": "",
  "body": "  Fill in missing entries so that is an orthogonal set:     Let represent the missing element in . It follows that .  To find , we need to find a vector that is orthogonal to both and . Note that works since the zero vector is orthogonal to every vector. Usually, we are interested in finding vectors that are linearly independent so that they will form a basis for our space, so let's find a vector other than the zero vector. Let and note that and . It follows that can be any vector in , where . Feel free to find a non-zero vector in by row reducing and following the normal process. Or, you might be able to observe that , which makes it a fine choice for the third vector in the orthogonal set.   "
},
{
  "id": "thm-orth-li",
  "level": "2",
  "url": "Section-6-2.html#thm-orth-li",
  "type": "Theorem",
  "number": "6.22",
  "title": "Linear Independence of Orthogonal Sets.",
  "body": " Linear Independence of Orthogonal Sets   If is an orthogonal set of vectors, then:   Furthermore, if all the vectors are nonzero, then the set is linearly independent.   "
},
{
  "id": "thm-orth-expansion",
  "level": "2",
  "url": "Section-6-2.html#thm-orth-expansion",
  "type": "Theorem",
  "number": "6.23",
  "title": "Expansion in an Orthogonal Basis.",
  "body": " Expansion in an Orthogonal Basis   If is an orthogonal basis for a subspace , then any can be written:   where     Proof: Suppose is an orthogonal basis for a subspace . Then, we know that for each (since this is an orthogonal set) and (since ). Let . Then, can be expressed uniquely as a linear combination of the basis vectors; that is for a unique choice of . Note what happens if we dot product both sides of the above equation with for some : It follows that . Since , we divide both sides by that quantity to get .   "
},
{
  "id": "ex-6-2-expansion",
  "level": "2",
  "url": "Section-6-2.html#ex-6-2-expansion",
  "type": "Example",
  "number": "6.24",
  "title": "",
  "body": "  Let and let be the subspace of that is orthogonal to .     Check that forms an orthogonal basis for .    First, we show that is an orthogonal set . Note that . Therefore, and are orthogonal, so is an orthogonal set.  Next, we show that is a basis for . From the description of , we see that . Using the two results given in , we see that . Therefore, a basis for must contain two linearly independent vectors that live in . We can see that and since they are not multiples of one another. Another way to see this is that non-zero orthogonal vectors are always linearly independent. Lastly, we need to show that and actually live in . Note that Thus, is orthogonal to and is orthogonal to . Hence, , so is a basis for . Since was also an orthogonal set, it is an orthogonal basis for .      Verify that .    Note that , so is orthogonal to . Thus, .      Compute the expansion of in the basis .    Since and since is a basis for , we know there exists a unique choice of so that . Since is an orthogonal basis for , we can use to find and . Therefore, we have that , which can be easily checked.    "
},
{
  "id": "def-projection",
  "level": "2",
  "url": "Section-6-2.html#def-projection",
  "type": "Definition",
  "number": "6.25",
  "title": "Orthogonal Projection.",
  "body": " Orthogonal Projection   For a nonzero vector and vector , the orthogonal projection of onto is:    "
},
{
  "id": "thm-projection-ortho",
  "level": "2",
  "url": "Section-6-2.html#thm-projection-ortho",
  "type": "Theorem",
  "number": "6.26",
  "title": "",
  "body": "  Let be a nonzero vector. Then, the vector is the vector in which is closest to . Also, the vector is orthogonal to . Furthermore, .   "
},
{
  "id": "ex-6-2-ortho",
  "level": "2",
  "url": "Section-6-2.html#ex-6-2-ortho",
  "type": "Example",
  "number": "6.27",
  "title": "",
  "body": "  Let and . Write as the sum of two orthogonal vectors, one in and one orthogonal to .    We want to find vectors and so that . Note that this is exactly what projection will give me. We have that . From , we see that is the vector in which is closest to . To find , we use and find that . We see that . Therefore, is a decomposition of into two vectors, one living in and the other living in . We will see in that this decomposition is unique.   "
},
{
  "id": "ex-6-2-projection",
  "level": "2",
  "url": "Section-6-2.html#ex-6-2-projection",
  "type": "Example",
  "number": "6.28",
  "title": "",
  "body": "  Let be the line spanned by .     Find the projection of onto the line .    Note that . There isn't anything too special about . Now, if we had instead gotten , then we would learn that , so is the vector in which is closest to .      How close is to the line ?    Note that the vector keeps track of how far away is from the line . It follows that the distance is from is given by .    "
},
{
  "id": "def-orthonormal-basis",
  "level": "2",
  "url": "Section-6-2.html#def-orthonormal-basis",
  "type": "Definition",
  "number": "6.29",
  "title": "Orthonormal Basis.",
  "body": " Orthonormal Basis   An orthonormal basis for a subspace is an orthogonal basis in which each vector has length 1.   "
},
{
  "id": "thm-orthonomal-basis",
  "level": "2",
  "url": "Section-6-2.html#thm-orthonomal-basis",
  "type": "Theorem",
  "number": "6.30",
  "title": "Expansion in an Orthonormal Basis.",
  "body": " Expansion in an Orthonormal Basis   If is orthonormal basis for and , then   and     Proof: The first result is a direct corollary of since for each , we have that because is a unit vector.   "
},
{
  "id": "ex-6-2-orthonormal-complete",
  "level": "2",
  "url": "Section-6-2.html#ex-6-2-orthonormal-complete",
  "type": "Example",
  "number": "6.31",
  "title": "",
  "body": "  Let . Find the missing entries in an orthonormal basis for :   Then, express as a linear combination of and .    Let . In order for , we see that the missing entry must be . Since the vector has magnitude , we see that . We need to choose so that it is orthogonal to (which verifies that ) and orthogonal to (since we want an orthonormal basis). By observation, we see that the vector satisfies the orthogonality conditions. Since that vector has length , we choose .  By , we have that . Checking, we see that    "
},
{
  "id": "def-orthogonal-matrix",
  "level": "2",
  "url": "Section-6-2.html#def-orthogonal-matrix",
  "type": "Definition",
  "number": "6.32",
  "title": "Orthogonal Matrix.",
  "body": " Orthogonal Matrix   An orthogonal matrix is a square matrix whose columns are orthonormal.   "
},
{
  "id": "thm-orthonormal-columns",
  "level": "2",
  "url": "Section-6-2.html#thm-orthonormal-columns",
  "type": "Theorem",
  "number": "6.33",
  "title": "",
  "body": "  An matrix has orthonormal columns if and only if .   "
},
{
  "id": "thm-orthogonal-maps",
  "level": "2",
  "url": "Section-6-2.html#thm-orthogonal-maps",
  "type": "Theorem",
  "number": "6.34",
  "title": "Mapping Properties of Orthogonal Matrices.",
  "body": " Mapping Properties of Orthogonal Matrices   If is an orthogonal matrix, then:    Preserves angles:  .  Using the defintion of dot product ( ), we see that . By , we see that . Therefore, .     Preserves length:  .  This is a direct consequence of using and the above result with and itself.     Preserves orthogonality.   This is direct consequence of and (a) above.      "
},
{
  "id": "ex-6-2-length-after-U",
  "level": "2",
  "url": "Section-6-2.html#ex-6-2-length-after-U",
  "type": "Example",
  "number": "6.35",
  "title": "Example.",
  "body": " Example   Compute the length of     Note that the matrix is a matrix with orthonormal columns. Therefore, we can use (b) to find that    "
},
{
  "id": "Section-6-3",
  "level": "1",
  "url": "Section-6-3.html",
  "type": "Section",
  "number": "",
  "title": "6.3 Orthogonal Projections",
  "body": " 6.3 Orthogonal Projections   6.3 Orthogonal Projections   Overview   Topics   Orthogonal projections and their properties  Best approximations     Goals    Apply orthogonality and projections to:   compute projections and distances,  express vectors using orthogonal decompositions,  construct best approximations.      Motivating Question  For the matrix and vector , which vector is closest to ?     Orthogonal Decomposition   If is a subspace of , then each has a unique decomposition:   where and . In fact, if is any orthogonal basis for , then   The vector is called the orthogonal projection of onto and can be written .  We have that .       Example 1    Let be an orthonormal basis of and let .  For any , write the orthogonal decomposition: , with and .    Since is an orthonormal basis for , we have , where by . Note that is an orthonormal basis for , so by , we have . It follows that .       Given   construct the decomposition , where is the orthogonal projection of onto .    Note that is an orthogonal basis for since . Therefore, Note that . What does this mean? Since must be a vector in , it must be the case that . Hopefully, it makes sense that for any vector already in , say , we will have . In this example, we have . Recall that in general we should have that . This is definitely true here.       Best Approximation Theorem   Best Approximation Theorem   Let and . If is the orthogonal projection of onto ; that is , then for every with ,   Thus, is the unique closest vector in to .      Let and . The distance of a vector from a subspace , denoted , is the minimum distance between and a vector ; that is, . By , we see that the vector in which is closest to is . Therefore, .       Using the same vectors as :   compute the distance from to .    Recall form , we have that . Therefore, we have that , which makes sense since .       Another Example    Find the distance from to the subspace , where .    First, we find . Note that is an orthogonal basis for . Check this. It follows that Note that in this example . Therefore, , so there is a nonzero distance between and . It follows that .       True\/False Questions    Indicate whether each statement is true or false. If true, explain why. If false, give a counterexample.     If is orthogonal to and , then is orthogonal to .    This is true. One way to prove this is by direct calculation. Since is orthogonal to and , we have that and . It follows that . Thus, is orthogonal to .  Another way to prove this is to strictly use theory. Note that if and are orthogonal to , then . Since is a subspace, it is closed under linear combinations, so . Thus, is also orthogonal to .      If , then .    This is true. By very definition, , so if , then .      If , where and , then is the orthogonal projection of onto .    This is true. By , we have , where and are uniquely chosen. Thus, we must have that .  We can see this more explicitly using the transitive property and properties of subspace and orthogonal complements. Note that . Therefore, we have that . Since and since is closed under linear combinations (it is a subspace), we have that . We also know that since each vector is in . It follows that the vector is a vector that is in both and , which means that it is a vector in that is also orthogonal to every vector in , including itself. The only vector orthogonal to itself is . Thus, .       "
},
{
  "id": "obj-6-3-topics-goals",
  "level": "2",
  "url": "Section-6-3.html#obj-6-3-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Orthogonal projections and their properties  Best approximations   "
},
{
  "id": "p-6-3-overview-3",
  "level": "2",
  "url": "Section-6-3.html#p-6-3-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals    Apply orthogonality and projections to:   compute projections and distances,  express vectors using orthogonal decompositions,  construct best approximations.     "
},
{
  "id": "thm-orth-decomposition",
  "level": "2",
  "url": "Section-6-3.html#thm-orth-decomposition",
  "type": "Theorem",
  "number": "6.36",
  "title": "Orthogonal Decomposition.",
  "body": " Orthogonal Decomposition   If is a subspace of , then each has a unique decomposition:   where and . In fact, if is any orthogonal basis for , then   The vector is called the orthogonal projection of onto and can be written .  We have that .   "
},
{
  "id": "ex-6-3-orth-decomp-5d",
  "level": "2",
  "url": "Section-6-3.html#ex-6-3-orth-decomp-5d",
  "type": "Example",
  "number": "6.37",
  "title": "",
  "body": "  Let be an orthonormal basis of and let .  For any , write the orthogonal decomposition: , with and .    Since is an orthonormal basis for , we have , where by . Note that is an orthonormal basis for , so by , we have . It follows that .   "
},
{
  "id": "ex-6-3-example2a",
  "level": "2",
  "url": "Section-6-3.html#ex-6-3-example2a",
  "type": "Example",
  "number": "6.38",
  "title": "",
  "body": "  Given   construct the decomposition , where is the orthogonal projection of onto .    Note that is an orthogonal basis for since . Therefore, Note that . What does this mean? Since must be a vector in , it must be the case that . Hopefully, it makes sense that for any vector already in , say , we will have . In this example, we have . Recall that in general we should have that . This is definitely true here.   "
},
{
  "id": "thm-best-approx",
  "level": "2",
  "url": "Section-6-3.html#thm-best-approx",
  "type": "Theorem",
  "number": "6.39",
  "title": "Best Approximation Theorem.",
  "body": " Best Approximation Theorem   Let and . If is the orthogonal projection of onto ; that is , then for every with ,   Thus, is the unique closest vector in to .   "
},
{
  "id": "def-dist-W",
  "level": "2",
  "url": "Section-6-3.html#def-dist-W",
  "type": "Definition",
  "number": "6.40",
  "title": "",
  "body": "  Let and . The distance of a vector from a subspace , denoted , is the minimum distance between and a vector ; that is, . By , we see that the vector in which is closest to is . Therefore, .   "
},
{
  "id": "ex-6-3-example2b",
  "level": "2",
  "url": "Section-6-3.html#ex-6-3-example2b",
  "type": "Example",
  "number": "6.41",
  "title": "",
  "body": "  Using the same vectors as :   compute the distance from to .    Recall form , we have that . Therefore, we have that , which makes sense since .   "
},
{
  "id": "ex-6-3-example3",
  "level": "2",
  "url": "Section-6-3.html#ex-6-3-example3",
  "type": "Example",
  "number": "6.42",
  "title": "",
  "body": "  Find the distance from to the subspace , where .    First, we find . Note that is an orthogonal basis for . Check this. It follows that Note that in this example . Therefore, , so there is a nonzero distance between and . It follows that .   "
},
{
  "id": "handout-section-6-3-projections-6-2",
  "level": "2",
  "url": "Section-6-3.html#handout-section-6-3-projections-6-2",
  "type": "Example",
  "number": "6.43",
  "title": "",
  "body": "  Indicate whether each statement is true or false. If true, explain why. If false, give a counterexample.     If is orthogonal to and , then is orthogonal to .    This is true. One way to prove this is by direct calculation. Since is orthogonal to and , we have that and . It follows that . Thus, is orthogonal to .  Another way to prove this is to strictly use theory. Note that if and are orthogonal to , then . Since is a subspace, it is closed under linear combinations, so . Thus, is also orthogonal to .      If , then .    This is true. By very definition, , so if , then .      If , where and , then is the orthogonal projection of onto .    This is true. By , we have , where and are uniquely chosen. Thus, we must have that .  We can see this more explicitly using the transitive property and properties of subspace and orthogonal complements. Note that . Therefore, we have that . Since and since is closed under linear combinations (it is a subspace), we have that . We also know that since each vector is in . It follows that the vector is a vector that is in both and , which means that it is a vector in that is also orthogonal to every vector in , including itself. The only vector orthogonal to itself is . Thus, .    "
},
{
  "id": "Section-6-4",
  "level": "1",
  "url": "Section-6-4.html",
  "type": "Section",
  "number": "",
  "title": "6.4 Gram–Schmidt and QR Decomposition",
  "body": " 6.4 Gram–Schmidt and QR Decomposition   6.4 Gram–Schmidt and QR Decomposition   Overview   Topics   The Gram–Schmidt Process  The QR decomposition     Goals   Apply Gram–Schmidt and QR decomposition to construct orthogonal or orthonormal bases.  Compute the QR factorization of a matrix.    Motivating Question  Identify an orthogonal basis for the subspace spanned by:     The Gram–Schmidt Process   Given a basis for a subspace , define:   Then is an orthogonal basis for . Additionally, . Thus, we see that each vector is formed by starting with and then removing the orthogonal projection of onto ; that is, .      Geometric Interpretation    Geometric view of Gram–Schmidt orthogonalization.  Vectors are used to produce orthogonal vectors via subtraction of projections.   Gram–Schmidt successively removes the components of each vector in the span of earlier ones.    Let . Find an orthogonal basis for .    Let and . Using , we have that and Note that and , so is an orthogonal basis for .        The vectors below span a subspace . Construct an orthogonal basis for .     First, note that Then, we have that Note that scaling will not change its orthogonality with . So, in order to make future projections easier, let's scale the current by 4 to obtain , which is still orthogonal to . Next, we have that Again, we can scale to obtain the a nicer vector which is still orthogonal to and : . Thus, is an orthogonal basis for . Note that there was nothing forcing us to start the process with . If instead we started with and then used followed by , we would have obtained the following orthogonal basis for  , which is a \"nicer\" orthogonal basis for , especially if planning to use .       The QR Factorization   QR Factorization   If is an matrix with linearly independent columns, then has a QR factorization:   where:   is whose columns are an orthonormal basis for ,  is , upper triangular, with positive entries on its diagonal, and the length of the column of is equal to the length of the column of .       Compute the QR decomposition of:     Note from that is an orthogonal basis for . Normalizing the vectors results in the following orthonormal basis for : We let these be the columns of , so . To find , we calculate . Note that Note that has all the desired properties: it is , upper triangular, has positive entries on the diagonal, and and where and are the columns of and , respectively.        Compute the QR decomposition of:     Using from and normalizing the vectors, we set . It follows that Again, we can check that has all the expected properties: it is , upper triangular, positive entries on the diagonal, and and .      "
},
{
  "id": "obj-6-4-topics-goals",
  "level": "2",
  "url": "Section-6-4.html#obj-6-4-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The Gram–Schmidt Process  The QR decomposition   "
},
{
  "id": "p-6-4-overview-3",
  "level": "2",
  "url": "Section-6-4.html#p-6-4-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Apply Gram–Schmidt and QR decomposition to construct orthogonal or orthonormal bases.  Compute the QR factorization of a matrix.   "
},
{
  "id": "thm-gram-schmidt",
  "level": "2",
  "url": "Section-6-4.html#thm-gram-schmidt",
  "type": "Theorem",
  "number": "6.44",
  "title": "The Gram–Schmidt Process.",
  "body": " The Gram–Schmidt Process   Given a basis for a subspace , define:   Then is an orthogonal basis for . Additionally, . Thus, we see that each vector is formed by starting with and then removing the orthogonal projection of onto ; that is, .   "
},
{
  "id": "ex-6-4-2vec",
  "level": "2",
  "url": "Section-6-4.html#ex-6-4-2vec",
  "type": "Example",
  "number": "6.45",
  "title": "",
  "body": "  Let . Find an orthogonal basis for .    Let and . Using , we have that and Note that and , so is an orthogonal basis for .   "
},
{
  "id": "ex-6-4-orth-basis",
  "level": "2",
  "url": "Section-6-4.html#ex-6-4-orth-basis",
  "type": "Example",
  "number": "6.46",
  "title": "",
  "body": "  The vectors below span a subspace . Construct an orthogonal basis for .     First, note that Then, we have that Note that scaling will not change its orthogonality with . So, in order to make future projections easier, let's scale the current by 4 to obtain , which is still orthogonal to . Next, we have that Again, we can scale to obtain the a nicer vector which is still orthogonal to and : . Thus, is an orthogonal basis for . Note that there was nothing forcing us to start the process with . If instead we started with and then used followed by , we would have obtained the following orthogonal basis for  , which is a \"nicer\" orthogonal basis for , especially if planning to use .   "
},
{
  "id": "thm-qr",
  "level": "2",
  "url": "Section-6-4.html#thm-qr",
  "type": "Theorem",
  "number": "6.47",
  "title": "QR Factorization.",
  "body": " QR Factorization   If is an matrix with linearly independent columns, then has a QR factorization:   where:   is whose columns are an orthonormal basis for ,  is , upper triangular, with positive entries on its diagonal, and the length of the column of is equal to the length of the column of .    "
},
{
  "id": "ex-6-4-qr-example",
  "level": "2",
  "url": "Section-6-4.html#ex-6-4-qr-example",
  "type": "Example",
  "number": "6.48",
  "title": "",
  "body": "  Compute the QR decomposition of:     Note from that is an orthogonal basis for . Normalizing the vectors results in the following orthonormal basis for : We let these be the columns of , so . To find , we calculate . Note that Note that has all the desired properties: it is , upper triangular, has positive entries on the diagonal, and and where and are the columns of and , respectively.   "
},
{
  "id": "handout-section-6-4-gram-schmidt-6-1",
  "level": "2",
  "url": "Section-6-4.html#handout-section-6-4-gram-schmidt-6-1",
  "type": "Example",
  "number": "6.49",
  "title": "",
  "body": "  Compute the QR decomposition of:     Using from and normalizing the vectors, we set . It follows that Again, we can check that has all the expected properties: it is , upper triangular, positive entries on the diagonal, and and .   "
},
{
  "id": "Section-6-5",
  "level": "1",
  "url": "Section-6-5.html",
  "type": "Section",
  "number": "",
  "title": "6.5 Least-Squares Problems",
  "body": " 6.5 Least-Squares Problems   6.5 Least-Squares Problems   Overview   Topics   Least squares problems  Methods for solving least squares problems     Goals    Compute general solutions and least squares errors using both:  the normal equations  the QR decomposition         Least Squares Solution   Let be an matrix. A vector is a least squares solution to if       Suppose is a consistent system.   Then there exists at least one vector so that .         This vector is a least squares solution to and we have that for all .          Now, suppose is an inconsistent system.   Then there is no vector so that .         So, a least squares solution  is a vector so that is to .   as close as possible     Recall that is always a vector in .         By , we have that is the vector in that is as close as possible to .         Thus, the least squares solutions to are the vectors which are solutions to the equation .               Least Squares Solution    Consider the system for .     Is the system consistent?    Note that . Therefore, there is no solution and the system is inconsistent.      Find the vector .    In order to project onto , we need an orthogonal basis of . Since the columns of are not orthogonal, we start by using the Gram-Schmidt Process. If we assign the columns of as and , respectively, then we have that We will use in place of . So, is an orthogonal basis for . Therefore, we have that So, is the vector in which is as close as possible to .      Find the least squares solution to .    We will solve the equation . Note that . Thus, the least-squares solution is . Notice the error from our least-squares solution is            Geometric interpretation of least squares projection.  The projection is the closest point in to the vector .      Note that if is a least squares solution to , then is orthogonal to every vector in .         Then, we have that lives in .         By the Four Subspace Theorem , we have that lives in .         Therefore, we have that .         It follows that .            Normal Equations for Least Squares   Least squares solutions of are precisely the solutions of   refered to as the normal equations .      Example: Solving via Normal Equations    Use the normal equations to find the least-squares solution of , where     Note that and . Therefore, then normal equations are . Note that It follows that the least-squares solution is , which agrees with our answer from .       Conditions for Unique Least Squares Solutions   Unique Least Squares Solutions   For an matrix , the following are equivalent:   For every , the equation has a unique least squares solution.  The columns of are linearly independent.  is invertible.   When these hold,       Compute the least squares solution to , where     Since the columns of are linearly independent, we know by there is a unique least-squares solution to . Note that the columns of are already orthogonal. Therefore, this problem wouldn't be so bad to use our original method to finding a least-squares solution like in . We will instead use the normal equations which is usually the fastest way, especially when the columns of are not orthogonal.  Note that and . (The reason is diagonal is because the columns of are orthogonal.) It follows that , so the least square solution is .       Least Squares Using QR   Least Squares via QR Factorization   If is a QR decomposition of an matrix , then for any the least squares solution of satisfies:       Compute the least squares solution to , where   given the QR factorization:     Note that we are given . We have . Therefore, by , the least-squares solution to is the vector so that . If was a matrix, then I usually find its inverse and multiply that to both sides. When is or greater, then I usually solve it by Row Operations. Note that Thus, the least-squares solution is .      "
},
{
  "id": "obj-6-5-topics-goals",
  "level": "2",
  "url": "Section-6-5.html#obj-6-5-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Least squares problems  Methods for solving least squares problems   "
},
{
  "id": "p-6-5-overview-3",
  "level": "2",
  "url": "Section-6-5.html#p-6-5-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals    Compute general solutions and least squares errors using both:  the normal equations  the QR decomposition      "
},
{
  "id": "def-least-squares",
  "level": "2",
  "url": "Section-6-5.html#def-least-squares",
  "type": "Definition",
  "number": "6.50",
  "title": "Least Squares Solution.",
  "body": " Least Squares Solution   Let be an matrix. A vector is a least squares solution to if    "
},
{
  "id": "p-6-5-overview-6",
  "level": "2",
  "url": "Section-6-5.html#p-6-5-overview-6",
  "type": "Note",
  "number": "6.51",
  "title": "",
  "body": "  Suppose is a consistent system.   Then there exists at least one vector so that .         This vector is a least squares solution to and we have that for all .          Now, suppose is an inconsistent system.   Then there is no vector so that .         So, a least squares solution  is a vector so that is to .   as close as possible     Recall that is always a vector in .         By , we have that is the vector in that is as close as possible to .         Thus, the least squares solutions to are the vectors which are solutions to the equation .           "
},
{
  "id": "ex-6-5-inconsistent",
  "level": "2",
  "url": "Section-6-5.html#ex-6-5-inconsistent",
  "type": "Example",
  "number": "6.52",
  "title": "",
  "body": "  Consider the system for .     Is the system consistent?    Note that . Therefore, there is no solution and the system is inconsistent.      Find the vector .    In order to project onto , we need an orthogonal basis of . Since the columns of are not orthogonal, we start by using the Gram-Schmidt Process. If we assign the columns of as and , respectively, then we have that We will use in place of . So, is an orthogonal basis for . Therefore, we have that So, is the vector in which is as close as possible to .      Find the least squares solution to .    We will solve the equation . Note that . Thus, the least-squares solution is . Notice the error from our least-squares solution is     "
},
{
  "id": "p-6-5-geometry-1",
  "level": "2",
  "url": "Section-6-5.html#p-6-5-geometry-1",
  "type": "Note",
  "number": "6.53",
  "title": "",
  "body": "   Geometric interpretation of least squares projection.  The projection is the closest point in to the vector .      Note that if is a least squares solution to , then is orthogonal to every vector in .         Then, we have that lives in .         By the Four Subspace Theorem , we have that lives in .         Therefore, we have that .         It follows that .          "
},
{
  "id": "thm-normal-equations",
  "level": "2",
  "url": "Section-6-5.html#thm-normal-equations",
  "type": "Theorem",
  "number": "6.54",
  "title": "Normal Equations for Least Squares.",
  "body": " Normal Equations for Least Squares   Least squares solutions of are precisely the solutions of   refered to as the normal equations .   "
},
{
  "id": "ex-6-5-normal",
  "level": "2",
  "url": "Section-6-5.html#ex-6-5-normal",
  "type": "Example",
  "number": "6.55",
  "title": "",
  "body": "  Use the normal equations to find the least-squares solution of , where     Note that and . Therefore, then normal equations are . Note that It follows that the least-squares solution is , which agrees with our answer from .   "
},
{
  "id": "thm-ls-unique",
  "level": "2",
  "url": "Section-6-5.html#thm-ls-unique",
  "type": "Theorem",
  "number": "6.56",
  "title": "Unique Least Squares Solutions.",
  "body": " Unique Least Squares Solutions   For an matrix , the following are equivalent:   For every , the equation has a unique least squares solution.  The columns of are linearly independent.  is invertible.   When these hold,    "
},
{
  "id": "ex-6-5-orth-cols",
  "level": "2",
  "url": "Section-6-5.html#ex-6-5-orth-cols",
  "type": "Example",
  "number": "6.57",
  "title": "",
  "body": "  Compute the least squares solution to , where     Since the columns of are linearly independent, we know by there is a unique least-squares solution to . Note that the columns of are already orthogonal. Therefore, this problem wouldn't be so bad to use our original method to finding a least-squares solution like in . We will instead use the normal equations which is usually the fastest way, especially when the columns of are not orthogonal.  Note that and . (The reason is diagonal is because the columns of are orthogonal.) It follows that , so the least square solution is .   "
},
{
  "id": "thm-ls-using-qr",
  "level": "2",
  "url": "Section-6-5.html#thm-ls-using-qr",
  "type": "Theorem",
  "number": "6.58",
  "title": "Least Squares via QR Factorization.",
  "body": " Least Squares via QR Factorization   If is a QR decomposition of an matrix , then for any the least squares solution of satisfies:    "
},
{
  "id": "ex-6-5-qr-ls",
  "level": "2",
  "url": "Section-6-5.html#ex-6-5-qr-ls",
  "type": "Example",
  "number": "6.59",
  "title": "",
  "body": "  Compute the least squares solution to , where   given the QR factorization:     Note that we are given . We have . Therefore, by , the least-squares solution to is the vector so that . If was a matrix, then I usually find its inverse and multiply that to both sides. When is or greater, then I usually solve it by Row Operations. Note that Thus, the least-squares solution is .   "
},
{
  "id": "Section-6-6",
  "level": "1",
  "url": "Section-6-6.html",
  "type": "Section",
  "number": "",
  "title": "6.6 Applications to Linear Models",
  "body": " 6.6 Applications to Linear Models   6.6 Applications to Linear Models   Overview   Topics   Least Squares Lines  Linear and more complicated models     Goals    Apply least-squares and mutiple regression to construct a linear model from a set of data points.    Apply least-squares to fit polynomials and other curves to data.      One of the most useful applications of finding least squares solutions is to determine curves of best fit for data.   A graph containing four points and the line of best fit.    The graph above gives an approximate linear relationship between and .   The black circles are data.    The blue line is the least squares line , also known as the line of best fit .    The lengths of the red lines are the errors between our line of best fit and the data.    The least squares line minimizes the sum of squares of the errors.       Least Squares Solution    Suppose we want to construct a line of the form that best fits the data below.    A 2D scatter plot showing the four points (-2,0), (-1,2), and (3,3) used for linear least squares fitting.      Find a system of equations that can be used to solve for and .    Note that we want the line to go through the points and . Each of these points gives an equation in terms of and which is found by plugging the point in for and in the model . We have Therefore, the system which should be solved to determine and is .      Is the system found in (a) consistent?    Note that , which is an inconsistent system.      Identify the best choices of and by finding the least-squares solution to .    We start with the normal equations . Note that and . Therefore, to find the least-squares solution, we solve the system . Note that . Thus, the line of best fit is .        We can use this technique to find line of best fit even when there are more than two variables.    Suppose we are trying to predict house prices based on two factors:    size (in 1000 sq ft)     number of bedrooms   We have the following data:  Housing Data    Size (in 1000 sq ft)  Number of Bedrooms  Price (in $1000s)    1.0  1  180    2.0  2  260    3.0  3  310    4.0  3  350         Setup the least-squares problem which will produce the best linear model for this situation: .    The data gives the following data points : . Like in the previous example, each data point gives an equation: It follows that the system of the form which would lead to an exact fitting of the curve is . This system is not consistent (feel free to check). Therefore, we instead find the normal equations in order to find the least-squares solution. Note that and . Therefore, the system which leads to our least-squares solution is .      Solving the system above, we find that . According to this model, how much should a house with 2000 ft and 3 bedrooms be worth?    We find that the linear model that best fits the data is . Note that 2000 ft corresponds to and 3 bedrooms corresponds to . Plugging this into the model, we find that . Therefore, a house with 2000 ft and 3 bedrooms should be worth $280,000.        Non Linear Curves of Best Fit  We do not have to restrict ourselves to linear curves of best fit. All that is required to use Least Squares is that the unknowns we are trying to solve for, our coefficients, are linear. There is nothing wrong with allowing the variables to be nonlinear.  In general, we can consider least squares fitting for the form , where the functions are known, but not necessarily linear. Keep in mind that this is a linear problem in the variables.    For the remaining four examples, we will fit various curves to the following points: . Once you find the curve, graph the points and the curve on Desmos and see how good the curve fits.  We will start by fitting a linear curve to the data: . This one can be solved without the need of a calculator.    We start with the four equations which come from our data points: This leads to the system which is an inconsistent system. Therefore, we find the least-squares solution. Note that and . So, the normal equations are . We have that Therefore, the line of best fit is . The graph below displays how well this line fits the four data points.   A graph containing the line of best fit for the four points (-1,-3), (0,0), (1,3), (2,2).         Continuing from , we will now fit a quadratic curve to the data: . For the remaining problems, feel free to use a matrix equation solver after setting up the least squares problem as .    Again, we start with the four equations which come from our data points. The difference here is that we will have three variables, , which will produce an additional column in . This leads to the system which is an inconsistent system. Therefore, we find the least-squares solution. Note that and . So, the normal equations are . We have that . Therefore, the quadratic which best fits the data is . The graph below displays how well this quadratic fits the four data points.   A graph containing the quadratic of best fit for the four points (-1,-3), (0,0), (1,3), (2,2).         Continuing from , we will now fit a cubic curve to the data: . What do you notice about your least-squares solution? Is this expected?    Note that the four equations which come from our data points and this cubic model are: This leads to the system . This time the system is consistent , so there is no need to find the least-squares solution. Note that . Therefore, the cubic which perfectly fits the data is . The graph below shows how this cubic fits the four data points perfectly.   A graph containing the cubic which perfectly fits the four points (-1,-3), (0,0), (1,3), (2,2).   Note that if we did calculate the normal equations and find the least-squares solution to the system, then it would have given the exact solution to , So, there is nothing wrong with finding the least-squares solution to a consistent system since it will still give you the correct answer, it will just take more time and effort than solving the system directly.        Continuing from , we will now fit a somewhat trigonometric curve to the data: . What do you notice about your least-squares solution?    Note that the four equations which come from our data points and this model are: This leads to the system . Surprisingly, this system is consistent . Note that . Therefore, the curve of this type which perfectly fits the data is . The graph below displays how this model perfectly fits the four data points.   A graph containing the curve of the above type which perfectly fits the four points (-1,-3), (0,0), (1,3), (2,2).       "
},
{
  "id": "obj-6-6-topics-goals",
  "level": "2",
  "url": "Section-6-6.html#obj-6-6-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Least Squares Lines  Linear and more complicated models   "
},
{
  "id": "p-6-6-overview-3",
  "level": "2",
  "url": "Section-6-6.html#p-6-6-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals    Apply least-squares and mutiple regression to construct a linear model from a set of data points.    Apply least-squares to fit polynomials and other curves to data.    "
},
{
  "id": "ex-6-6-inconsistent",
  "level": "2",
  "url": "Section-6-6.html#ex-6-6-inconsistent",
  "type": "Example",
  "number": "6.60",
  "title": "",
  "body": "  Suppose we want to construct a line of the form that best fits the data below.    A 2D scatter plot showing the four points (-2,0), (-1,2), and (3,3) used for linear least squares fitting.      Find a system of equations that can be used to solve for and .    Note that we want the line to go through the points and . Each of these points gives an equation in terms of and which is found by plugging the point in for and in the model . We have Therefore, the system which should be solved to determine and is .      Is the system found in (a) consistent?    Note that , which is an inconsistent system.      Identify the best choices of and by finding the least-squares solution to .    We start with the normal equations . Note that and . Therefore, to find the least-squares solution, we solve the system . Note that . Thus, the line of best fit is .    "
},
{
  "id": "handout-section-6-6-applications-of-least-squares-4-2",
  "level": "2",
  "url": "Section-6-6.html#handout-section-6-6-applications-of-least-squares-4-2",
  "type": "Example",
  "number": "6.61",
  "title": "",
  "body": "  Suppose we are trying to predict house prices based on two factors:    size (in 1000 sq ft)     number of bedrooms   We have the following data:  Housing Data    Size (in 1000 sq ft)  Number of Bedrooms  Price (in $1000s)    1.0  1  180    2.0  2  260    3.0  3  310    4.0  3  350         Setup the least-squares problem which will produce the best linear model for this situation: .    The data gives the following data points : . Like in the previous example, each data point gives an equation: It follows that the system of the form which would lead to an exact fitting of the curve is . This system is not consistent (feel free to check). Therefore, we instead find the normal equations in order to find the least-squares solution. Note that and . Therefore, the system which leads to our least-squares solution is .      Solving the system above, we find that . According to this model, how much should a house with 2000 ft and 3 bedrooms be worth?    We find that the linear model that best fits the data is . Note that 2000 ft corresponds to and 3 bedrooms corresponds to . Plugging this into the model, we find that . Therefore, a house with 2000 ft and 3 bedrooms should be worth $280,000.    "
},
{
  "id": "ex-6-6-curve-best-fit-a",
  "level": "2",
  "url": "Section-6-6.html#ex-6-6-curve-best-fit-a",
  "type": "Example",
  "number": "6.63",
  "title": "",
  "body": "  For the remaining four examples, we will fit various curves to the following points: . Once you find the curve, graph the points and the curve on Desmos and see how good the curve fits.  We will start by fitting a linear curve to the data: . This one can be solved without the need of a calculator.    We start with the four equations which come from our data points: This leads to the system which is an inconsistent system. Therefore, we find the least-squares solution. Note that and . So, the normal equations are . We have that Therefore, the line of best fit is . The graph below displays how well this line fits the four data points.   A graph containing the line of best fit for the four points (-1,-3), (0,0), (1,3), (2,2).    "
},
{
  "id": "handout-section-6-6-applications-of-least-squares-6-1",
  "level": "2",
  "url": "Section-6-6.html#handout-section-6-6-applications-of-least-squares-6-1",
  "type": "Example",
  "number": "6.64",
  "title": "",
  "body": "  Continuing from , we will now fit a quadratic curve to the data: . For the remaining problems, feel free to use a matrix equation solver after setting up the least squares problem as .    Again, we start with the four equations which come from our data points. The difference here is that we will have three variables, , which will produce an additional column in . This leads to the system which is an inconsistent system. Therefore, we find the least-squares solution. Note that and . So, the normal equations are . We have that . Therefore, the quadratic which best fits the data is . The graph below displays how well this quadratic fits the four data points.   A graph containing the quadratic of best fit for the four points (-1,-3), (0,0), (1,3), (2,2).    "
},
{
  "id": "handout-section-6-6-applications-of-least-squares-7-1",
  "level": "2",
  "url": "Section-6-6.html#handout-section-6-6-applications-of-least-squares-7-1",
  "type": "Example",
  "number": "6.65",
  "title": "",
  "body": "  Continuing from , we will now fit a cubic curve to the data: . What do you notice about your least-squares solution? Is this expected?    Note that the four equations which come from our data points and this cubic model are: This leads to the system . This time the system is consistent , so there is no need to find the least-squares solution. Note that . Therefore, the cubic which perfectly fits the data is . The graph below shows how this cubic fits the four data points perfectly.   A graph containing the cubic which perfectly fits the four points (-1,-3), (0,0), (1,3), (2,2).   Note that if we did calculate the normal equations and find the least-squares solution to the system, then it would have given the exact solution to , So, there is nothing wrong with finding the least-squares solution to a consistent system since it will still give you the correct answer, it will just take more time and effort than solving the system directly.   "
},
{
  "id": "handout-section-6-6-applications-of-least-squares-8-1",
  "level": "2",
  "url": "Section-6-6.html#handout-section-6-6-applications-of-least-squares-8-1",
  "type": "Example",
  "number": "6.66",
  "title": "",
  "body": "  Continuing from , we will now fit a somewhat trigonometric curve to the data: . What do you notice about your least-squares solution?    Note that the four equations which come from our data points and this model are: This leads to the system . Surprisingly, this system is consistent . Note that . Therefore, the curve of this type which perfectly fits the data is . The graph below displays how this model perfectly fits the four data points.   A graph containing the curve of the above type which perfectly fits the four points (-1,-3), (0,0), (1,3), (2,2).    "
},
{
  "id": "Section-10-2",
  "level": "1",
  "url": "Section-10-2.html",
  "type": "Section",
  "number": "",
  "title": "10.2 Google PageRank",
  "body": " 10.2 Google PageRank   10.2 Google PageRank   Overview   Topics   Review of Markov chains  Steady-state theorem for Markov chains  Modeling website usage with Markov chains  Computing PageRank     Goals   Determine whether a stochastic matrix is regular.  Use matrix powers and theorems to describe long-term behavior.  Construct transition and Google matrices and compute PageRank.      Recall : A rental company has three locations A, B, and C.     rented from    A B C    A .8 .1 .2    returned to B .2 .6 .3    C .0 .3 .5     There are 18 cars at each location initially. What happens in the long run?    Recall that the stochastic matrix for this problem is . Let . We have that the term in the Markov Chain is given by . Note is regular since has only positive entries. guarantees that there is a unique steady-state vector for ; that is, there is a unique probability vector so that . We now know that is an eigenvector of corresponding to an eigenvalue of which is also a probability vector. We have that the \"final\" vector in the Markov Chain is , where is the sum of the entries of . Thus, the final vector is .       Long-Term Behavior  Recall from Section 4.9\/5.9 Markov Chains , that for Markov Chain problems involving a regular stochastic matrix , we can find the unique steady-state vector by finding the unique probability eigenvector corresponding to an eigenvalue of . This involves solving the equation .  For the stochastic matrices , called Google Matrices, that we will create in our PageRank problems, it is going to be extremely difficult to solve . So, we instead determine a different way to identify the steady-state vector.   Convergence of Regular Stochastic Matrices   If is a regular stochastic matrix with and with unique steady-state vector , then:    There is a stochastic matrix such that .   For any starting probability vector , we have that .  Each column of equals .  is the unique eigenvector with eigenvalue .  All eigenvalues of satisfy .     First, note that (2) is guaranteed since is regular and so has a unique steady state vector regardless of the starting probability vector . We can prove (3) by observing that for any , we have that the column of is given by by (2). Hence, every column of is equal to .    Focusing on (3), we see that an alternative way to find the unique steady-state vector is to take large powers of and see what vector the columns of are converging to. This will require a computer.     Example 1: A Web Graph    Suppose we have 5 web pages that link to each other according to the following diagram:    Directed graph of 5 web page links, where nodes represent pages and arrows represent hyperlinks used to build a transition matrix.   Note that Page A has direct links to pages .   B and D.   If a user on a page in this web is equally likely to go to any of the pages that their page links to, construct a stochastic matrix that represents how users navigate this web.    Assuming at each step that we have to click a link to travel to the next page, we find . Notice that the fifth column is since there are no links leaving Page E. This creates a non-stochastic matrix, which is not good for our problem. To fix this we replace column 5 with since if you are on Page E, you are stuck that after each step since there is no way to travel somewhere else. Therefore, the stochastic matrix which models this scenario is .      Note that the matrix formed in describes how users transition between pages in the web after clicking a single link.  What does describe?  What does describe?  By , if is a regular stochastic matrix, then . Each entry of the unique steady-state vector is describing the how likely someone is to be on that webpage in the long run.  Therefore, is describing the popularity or importance of each page in the web.  The PageRank is the ranking assigned to each page based on its importance, which is determined from . The highest ranked page has PageRank 1, the second has PageRank 2, and so on.    Is the matrix from regular?   No. So we want to make adjustments.     Adjustment 1: Dangling Nodes   Adjustment 1   If a page has no outgoing links, a user moves to any page with equal probability. We call this modified stochastic matrix to .      With this adjustment, what is for ? Is it regular?     .      Adjustment 2   A user at any page will navigate to any page among those that their webpage links to with equal probability , and to any page in the web with equal probability . Then, the stochastic matrix becomes , where is an stochastic matrix with every entry equal to . The matrix is called the Google Matrix . The value is known as the damping factor . Google is said to use .      With this adjustment and with , what is for ? Is it regular?    We have that . Then , which is regular since the addition of guarantees that every entry of is positive.       Computing PageRank  Because is a regular stochastic matrix, we have that for any initial probability vector we have that . In practice, we can compute the PageRank for each page in the web by evaluating for large and then using . The elements of the resulting columns of give the PageRanks of each page in the web.    Let be the Google matrix from . Assuming , determine the PageRank of each of the pages in the web.    Note that the columns of are very close to one another. Thus, the columns of are close to the steady-state vector . It follows that . Ranking these entries from greatest to least, we see that          When PageRank was devised, in 1996, Yahoo! used humans to provide a \"index for the Internet\", which was 10 million pages.  The PageRank algortihm was produced as a competing method. The patent was awarded to Stanford University, and exclusively licensed to the newly formed Google corporation.  Brin and Page combined the PageRank algorithm with a webcrawler to provide regular updates to the Google matrix for the web.  The explosive growth of the web soon overwhelmed human based approaches to searching the internet.          Consider the following webpage:   A web containing 7 pages and the links between them.      Determine the Google matrix for this web, with .    We have that where is the matrix with a 1 in every entry. Then, we have that .      Determine the PageRank of each page if .    We have that . It follows that        "
},
{
  "id": "obj-10-2-topics-goals",
  "level": "2",
  "url": "Section-10-2.html#obj-10-2-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Review of Markov chains  Steady-state theorem for Markov chains  Modeling website usage with Markov chains  Computing PageRank   "
},
{
  "id": "p-10-2-overview-3",
  "level": "2",
  "url": "Section-10-2.html#p-10-2-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Determine whether a stochastic matrix is regular.  Use matrix powers and theorems to describe long-term behavior.  Construct transition and Google matrices and compute PageRank.   "
},
{
  "id": "prob-car-rental",
  "level": "2",
  "url": "Section-10-2.html#prob-car-rental",
  "type": "Example",
  "number": "7.1",
  "title": "",
  "body": "  Recall : A rental company has three locations A, B, and C.     rented from    A B C    A .8 .1 .2    returned to B .2 .6 .3    C .0 .3 .5     There are 18 cars at each location initially. What happens in the long run?    Recall that the stochastic matrix for this problem is . Let . We have that the term in the Markov Chain is given by . Note is regular since has only positive entries. guarantees that there is a unique steady-state vector for ; that is, there is a unique probability vector so that . We now know that is an eigenvector of corresponding to an eigenvalue of which is also a probability vector. We have that the \"final\" vector in the Markov Chain is , where is the sum of the entries of . Thus, the final vector is .   "
},
{
  "id": "thm-regular-markov",
  "level": "2",
  "url": "Section-10-2.html#thm-regular-markov",
  "type": "Theorem",
  "number": "7.3",
  "title": "Convergence of Regular Stochastic Matrices.",
  "body": " Convergence of Regular Stochastic Matrices   If is a regular stochastic matrix with and with unique steady-state vector , then:    There is a stochastic matrix such that .   For any starting probability vector , we have that .  Each column of equals .  is the unique eigenvector with eigenvalue .  All eigenvalues of satisfy .     First, note that (2) is guaranteed since is regular and so has a unique steady state vector regardless of the starting probability vector . We can prove (3) by observing that for any , we have that the column of is given by by (2). Hence, every column of is equal to .   "
},
{
  "id": "ex-10-2-web",
  "level": "2",
  "url": "Section-10-2.html#ex-10-2-web",
  "type": "Example",
  "number": "7.4",
  "title": "",
  "body": "  Suppose we have 5 web pages that link to each other according to the following diagram:    Directed graph of 5 web page links, where nodes represent pages and arrows represent hyperlinks used to build a transition matrix.   Note that Page A has direct links to pages .   B and D.   If a user on a page in this web is equally likely to go to any of the pages that their page links to, construct a stochastic matrix that represents how users navigate this web.    Assuming at each step that we have to click a link to travel to the next page, we find . Notice that the fifth column is since there are no links leaving Page E. This creates a non-stochastic matrix, which is not good for our problem. To fix this we replace column 5 with since if you are on Page E, you are stuck that after each step since there is no way to travel somewhere else. Therefore, the stochastic matrix which models this scenario is .   "
},
{
  "id": "p-10-2-web-example-3",
  "level": "2",
  "url": "Section-10-2.html#p-10-2-web-example-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PageRank "
},
{
  "id": "note-adjust1",
  "level": "2",
  "url": "Section-10-2.html#note-adjust1",
  "type": "Note",
  "number": "7.5",
  "title": "Adjustment 1.",
  "body": " Adjustment 1   If a page has no outgoing links, a user moves to any page with equal probability. We call this modified stochastic matrix to .   "
},
{
  "id": "p-10-2-adjustment1-3",
  "level": "2",
  "url": "Section-10-2.html#p-10-2-adjustment1-3",
  "type": "Example",
  "number": "7.6",
  "title": "",
  "body": "  With this adjustment, what is for ? Is it regular?     .   "
},
{
  "id": "note-adjust2",
  "level": "2",
  "url": "Section-10-2.html#note-adjust2",
  "type": "Note",
  "number": "7.7",
  "title": "Adjustment 2.",
  "body": " Adjustment 2   A user at any page will navigate to any page among those that their webpage links to with equal probability , and to any page in the web with equal probability . Then, the stochastic matrix becomes , where is an stochastic matrix with every entry equal to . The matrix is called the Google Matrix . The value is known as the damping factor . Google is said to use .   "
},
{
  "id": "ex-10-2-goog",
  "level": "2",
  "url": "Section-10-2.html#ex-10-2-goog",
  "type": "Example",
  "number": "7.8",
  "title": "",
  "body": "  With this adjustment and with , what is for ? Is it regular?    We have that . Then , which is regular since the addition of guarantees that every entry of is positive.   "
},
{
  "id": "p-10-2-computing-pagerank-3",
  "level": "2",
  "url": "Section-10-2.html#p-10-2-computing-pagerank-3",
  "type": "Example",
  "number": "7.9",
  "title": "",
  "body": "  Let be the Google matrix from . Assuming , determine the PageRank of each of the pages in the web.    Note that the columns of are very close to one another. Thus, the columns of are close to the steady-state vector . It follows that . Ranking these entries from greatest to least, we see that    "
},
{
  "id": "p-10-2-computing-pagerank-5",
  "level": "2",
  "url": "Section-10-2.html#p-10-2-computing-pagerank-5",
  "type": "Remark",
  "number": "7.10",
  "title": "",
  "body": "    When PageRank was devised, in 1996, Yahoo! used humans to provide a \"index for the Internet\", which was 10 million pages.  The PageRank algortihm was produced as a competing method. The patent was awarded to Stanford University, and exclusively licensed to the newly formed Google corporation.  Brin and Page combined the PageRank algorithm with a webcrawler to provide regular updates to the Google matrix for the web.  The explosive growth of the web soon overwhelmed human based approaches to searching the internet.     "
},
{
  "id": "p-10-2-history-1",
  "level": "2",
  "url": "Section-10-2.html#p-10-2-history-1",
  "type": "Example",
  "number": "7.11",
  "title": "",
  "body": "  Consider the following webpage:   A web containing 7 pages and the links between them.      Determine the Google matrix for this web, with .    We have that where is the matrix with a 1 in every entry. Then, we have that .      Determine the PageRank of each page if .    We have that . It follows that     "
},
{
  "id": "Section-7-1",
  "level": "1",
  "url": "Section-7-1.html",
  "type": "Section",
  "number": "",
  "title": "7.1 Diagonalization of Symmetric Matrices",
  "body": " 7.1 Diagonalization of Symmetric Matrices   7.1 Diagonalization of Symmetric Matrices   Overview   Topics   Symmetric matrices  Orthogonal diagonalization  Spectral decomposition     Goals   Construct an orthogonal diagonalization of a symmetric matrix.  Construct a spectral decomposition of a matrix.     Symmetric Matrix   A matrix is symmetric if .      Which of the following matrices are symmetric? Let and represent real numbers.          Is Symmetric   For any matrix with columns , the matrix is symmetric and has entries given by dot products of the columns of .     Orthogonality of Eigenspaces   If is symmetric and are eigenvectors corresponding to distinct eigenvalues, then and are orthogonal .  More generally, eigenspaces associated with distinct eigenvalues are orthogonal subspaces.      Example 1: Orthogonal Diagonalization    Diagonalize using an orthogonal matrix. The eigenvalues of are given.        Spectral Theorem    Recall that if is an orthogonal matrix, then .     Spectral Theorem   If is an  symmetric matrix, then:   All eigenvalues of are real.  The dimension of each eigenspace equals its algebraic multiplicity.  Eigenspaces corresponding to distinct eigenvalues are orthogonal.   can be orthogonally diagonalized as , where is orthogonal.       Spectral Decomposition   Suppose can be orthogonally diagonalized as . Then has the decomposition . Note that each term is a rank 1 matrix.        Construct a spectral decomposition of , given its orthogonal diagonalization:          Note in the solution to that if is the larger of the two eigenvalues and is a normalized eigenvector corresponding to , then is a close approximation of the matrix . In fact, it is the closest approximation of using a rank 1 matrix.  In general, if we label the eigenvalues of an symmetric matrix in non-increasing order by magnitude, so , then each matrix is the closest rank approximation of , which gets more accurate as approaches .   : The distance between two matrices is measured by subtracting the two matrices and calculating the square root of the sums of the squares of the entries in the resulting matrix. This calculation is the same calculation used to calculate the distance between two vectors. By closest, we mean that there is no rank matrix that is closer. There could be other rank matrices that are as close.      Construct a spectral decompositon of .      "
},
{
  "id": "obj-7-1-topics-goals",
  "level": "2",
  "url": "Section-7-1.html#obj-7-1-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Symmetric matrices  Orthogonal diagonalization  Spectral decomposition   "
},
{
  "id": "p-7-1-overview-3",
  "level": "2",
  "url": "Section-7-1.html#p-7-1-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Construct an orthogonal diagonalization of a symmetric matrix.  Construct a spectral decomposition of a matrix.   "
},
{
  "id": "def-symmetric",
  "level": "2",
  "url": "Section-7-1.html#def-symmetric",
  "type": "Definition",
  "number": "7.12",
  "title": "Symmetric Matrix.",
  "body": " Symmetric Matrix   A matrix is symmetric if .   "
},
{
  "id": "ex-7-1-symmetric",
  "level": "2",
  "url": "Section-7-1.html#ex-7-1-symmetric",
  "type": "Example",
  "number": "7.13",
  "title": "",
  "body": "  Which of the following matrices are symmetric? Let and represent real numbers.      "
},
{
  "id": "p-7-1-ata-symmetric-2",
  "level": "2",
  "url": "Section-7-1.html#p-7-1-ata-symmetric-2",
  "type": "Note",
  "number": "7.14",
  "title": "",
  "body": " For any matrix with columns , the matrix is symmetric and has entries given by dot products of the columns of .   "
},
{
  "id": "thm-orth-eigenspaces",
  "level": "2",
  "url": "Section-7-1.html#thm-orth-eigenspaces",
  "type": "Theorem",
  "number": "7.15",
  "title": "Orthogonality of Eigenspaces.",
  "body": " Orthogonality of Eigenspaces   If is symmetric and are eigenvectors corresponding to distinct eigenvalues, then and are orthogonal .  More generally, eigenspaces associated with distinct eigenvalues are orthogonal subspaces.   "
},
{
  "id": "ex-7-1-orth-diag",
  "level": "2",
  "url": "Section-7-1.html#ex-7-1-orth-diag",
  "type": "Example",
  "number": "7.16",
  "title": "",
  "body": "  Diagonalize using an orthogonal matrix. The eigenvalues of are given.    "
},
{
  "id": "p-7-1-spectral-theorem-2",
  "level": "2",
  "url": "Section-7-1.html#p-7-1-spectral-theorem-2",
  "type": "Note",
  "number": "7.17",
  "title": "",
  "body": "  Recall that if is an orthogonal matrix, then .   "
},
{
  "id": "thm-spectral",
  "level": "2",
  "url": "Section-7-1.html#thm-spectral",
  "type": "Theorem",
  "number": "7.18",
  "title": "Spectral Theorem.",
  "body": " Spectral Theorem   If is an  symmetric matrix, then:   All eigenvalues of are real.  The dimension of each eigenspace equals its algebraic multiplicity.  Eigenspaces corresponding to distinct eigenvalues are orthogonal.   can be orthogonally diagonalized as , where is orthogonal.    "
},
{
  "id": "thm-spectral-decomposition",
  "level": "2",
  "url": "Section-7-1.html#thm-spectral-decomposition",
  "type": "Theorem",
  "number": "7.19",
  "title": "Spectral Decomposition.",
  "body": " Spectral Decomposition   Suppose can be orthogonally diagonalized as . Then has the decomposition . Note that each term is a rank 1 matrix.   "
},
{
  "id": "ex-7-1-spectral",
  "level": "2",
  "url": "Section-7-1.html#ex-7-1-spectral",
  "type": "Example",
  "number": "7.20",
  "title": "",
  "body": "  Construct a spectral decomposition of , given its orthogonal diagonalization:    "
},
{
  "id": "handout-section-7-1-spectral-7-1",
  "level": "2",
  "url": "Section-7-1.html#handout-section-7-1-spectral-7-1",
  "type": "Note",
  "number": "7.21",
  "title": "",
  "body": "  Note in the solution to that if is the larger of the two eigenvalues and is a normalized eigenvector corresponding to , then is a close approximation of the matrix . In fact, it is the closest approximation of using a rank 1 matrix.  In general, if we label the eigenvalues of an symmetric matrix in non-increasing order by magnitude, so , then each matrix is the closest rank approximation of , which gets more accurate as approaches .   : The distance between two matrices is measured by subtracting the two matrices and calculating the square root of the sums of the squares of the entries in the resulting matrix. This calculation is the same calculation used to calculate the distance between two vectors. By closest, we mean that there is no rank matrix that is closer. There could be other rank matrices that are as close.   "
},
{
  "id": "handout-section-7-1-spectral-7-2",
  "level": "2",
  "url": "Section-7-1.html#handout-section-7-1-spectral-7-2",
  "type": "Example",
  "number": "7.22",
  "title": "",
  "body": "  Construct a spectral decompositon of .   "
},
{
  "id": "Section-7-2",
  "level": "1",
  "url": "Section-7-2.html",
  "type": "Section",
  "number": "",
  "title": "7.2 Quadratic Forms",
  "body": " 7.2 Quadratic Forms   7.2 Quadratic Forms   Overview   Topics   Quadratic forms  Change of variables  Principal axes theorem  Classification of quadratic forms     Goals   Characterize and classify quadratic forms using eigenvalues and eigenvectors.  Express quadratic forms in the form .  Apply the principal axes theorem to remove cross-product terms.    Motivating Question  Does the inequality below hold for all ?     Quadratic Form   A quadratic form is a function defined by   where is an  symmetric matrix.      Example 1    Compute and for the following matrices.                  The graphs of the quadratic forms from are given below. Students are not expected to sketch quadratic surfaces.   Graphs of the two quadratic curves Q_A and Q_B.       Example 2  As we will see shortly, properties of the symmetric matrix used to generate the quadratic form will allow us to determine characterisitcs about the quadratic form, such as whether it is always nonnegative. Therefore, if first presented with the quadratic form, it is useful to find the symmetric matrix which generates the quadratic form.    Write the quadratic form below in the form for .      Note in the above example it is difficult to determine whether is always nonnegative. This is due to the cross-product terms, terms of the form , since these terms could be positive or negative depending on the input.  To help us better determine properties of , we would like to perform a change of variables to obtain an equivalent quadratic form which no longer has any cross-product terms. Recall that we can find a symmetric matrix so that . Since is symmetric, we know by that for a diagonal matrix and orthogonal matrix .  What happens when we make the change of variables ?    Example 3: Removing Cross Terms   Principal Axes Theorem   If is symmetric, then there exists an orthogonal change of variables such that the quadratic form becomes , with no cross-product terms.      Use the orthogonal diagonalization of to remove cross-product terms from .       Classifying Quadratic Forms   Definiteness   A quadratic form is:   Positive definite if for all .  Negative definite if for all .  Positive semidefinite if for all .  Negative semidefinite if for all .  Indefinite if takes both positive and negative values.       Eigenvalue Classification   If is symmetric with eigenvalues , then:   is positive definite iff .  is negative definite iff .  is indefinite iff .          Determine whether the inequality holds for all :       "
},
{
  "id": "obj-7-2-topics-goals",
  "level": "2",
  "url": "Section-7-2.html#obj-7-2-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Quadratic forms  Change of variables  Principal axes theorem  Classification of quadratic forms   "
},
{
  "id": "p-7-2-overview-3",
  "level": "2",
  "url": "Section-7-2.html#p-7-2-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize and classify quadratic forms using eigenvalues and eigenvectors.  Express quadratic forms in the form .  Apply the principal axes theorem to remove cross-product terms.   "
},
{
  "id": "def-quadratic-form",
  "level": "2",
  "url": "Section-7-2.html#def-quadratic-form",
  "type": "Definition",
  "number": "7.23",
  "title": "Quadratic Form.",
  "body": " Quadratic Form   A quadratic form is a function defined by   where is an  symmetric matrix.   "
},
{
  "id": "ex-7-2-qf-compute",
  "level": "2",
  "url": "Section-7-2.html#ex-7-2-qf-compute",
  "type": "Example",
  "number": "7.24",
  "title": "",
  "body": "  Compute and for the following matrices.                 "
},
{
  "id": "ex-7-2-matrix-from-qf",
  "level": "2",
  "url": "Section-7-2.html#ex-7-2-matrix-from-qf",
  "type": "Example",
  "number": "7.25",
  "title": "",
  "body": "  Write the quadratic form below in the form for .    "
},
{
  "id": "thm-principal-axes",
  "level": "2",
  "url": "Section-7-2.html#thm-principal-axes",
  "type": "Theorem",
  "number": "7.26",
  "title": "Principal Axes Theorem.",
  "body": " Principal Axes Theorem   If is symmetric, then there exists an orthogonal change of variables such that the quadratic form becomes , with no cross-product terms.   "
},
{
  "id": "ex-7-2-change-vars",
  "level": "2",
  "url": "Section-7-2.html#ex-7-2-change-vars",
  "type": "Example",
  "number": "7.27",
  "title": "",
  "body": "  Use the orthogonal diagonalization of to remove cross-product terms from .    "
},
{
  "id": "def-classification",
  "level": "2",
  "url": "Section-7-2.html#def-classification",
  "type": "Definition",
  "number": "7.28",
  "title": "Definiteness.",
  "body": " Definiteness   A quadratic form is:   Positive definite if for all .  Negative definite if for all .  Positive semidefinite if for all .  Negative semidefinite if for all .  Indefinite if takes both positive and negative values.    "
},
{
  "id": "thm-qf-eigs",
  "level": "2",
  "url": "Section-7-2.html#thm-qf-eigs",
  "type": "Theorem",
  "number": "7.29",
  "title": "Eigenvalue Classification.",
  "body": " Eigenvalue Classification   If is symmetric with eigenvalues , then:   is positive definite iff .  is negative definite iff .  is indefinite iff .    "
},
{
  "id": "ex-7-2-motivation",
  "level": "2",
  "url": "Section-7-2.html#ex-7-2-motivation",
  "type": "Example",
  "number": "7.30",
  "title": "",
  "body": "  Determine whether the inequality holds for all :    "
},
{
  "id": "Section-7-3",
  "level": "1",
  "url": "Section-7-3.html",
  "type": "Section",
  "number": "",
  "title": "7.3 Constrained Optimization",
  "body": " 7.3 Constrained Optimization   7.3 Constrained Optimization   Overview   Topics   Constrained optimization as an eigenvalue problem  Distance and orthogonality constraints     Goals   Apply eigenvalues and eigenvectors to solve optimization problems subject to distance and orthogonality constraints.       Consider the quadratic form . Find the largest and smallest values of under the constraint that .     A coloring of the unit sphere which represents the values of Q from the previous example, where blue means low values and red means high values.      A Constrained Optimization Problem  Suppose we wish to find the maximum and minimum values of   subject to the constraint .  That is, we want   This is an example of a constrained optimization problem. We are also interested in where these extreme values are attained.  These problems are straight-forward when has no cross-product terms. What about when it does have cross-product terms?    Calculate the maximum and minimum values of   where and . Identify the points where these values are obtained.      The image below is the unit sphere whose surface is colored according to the quadratic form from . Notice the agreement between our solution and the image.   A coloring of the unit sphere which represents the values of Q from the previous example, where blue means low values and red means high values.    Constrained Optimization and Eigenvalues   Extrema via Eigenvalues   Let , where is a real symmetric matrix with eigenvalues   and corresponding normalized eigenvectors   Under the constraint :   The maximum value of is , attained at .  The minimum value of is , attained at .       Calculate the maximum value of , with , subject to the constraint . Identify a point where this maximum is obtained.        An Orthogonality Constraint   Extrema with an Orthogonality Condition   Let , where is a real symmetric matrix with eigenvalues   and corresponding eigenvectors   Subject to the constraints and :   The maximum value of is , attained at an eigenvector associated to .  The minimum value of is , attained at .   Here denotes the second largest eigenvalue of .      Calculate the maximum and minimum values of , with , subject to and , where . Identifu points where the maximum and minimum values occur. The eigenvalues of are .      "
},
{
  "id": "obj-7-3-topics-goals",
  "level": "2",
  "url": "Section-7-3.html#obj-7-3-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Constrained optimization as an eigenvalue problem  Distance and orthogonality constraints   "
},
{
  "id": "p-7-3-overview-3",
  "level": "2",
  "url": "Section-7-3.html#p-7-3-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Apply eigenvalues and eigenvectors to solve optimization problems subject to distance and orthogonality constraints.   "
},
{
  "id": "ex-7-3-unit-sphere",
  "level": "2",
  "url": "Section-7-3.html#ex-7-3-unit-sphere",
  "type": "Example",
  "number": "7.31",
  "title": "",
  "body": "  Consider the quadratic form . Find the largest and smallest values of under the constraint that .   "
},
{
  "id": "p-7-3-constrained-problem-7",
  "level": "2",
  "url": "Section-7-3.html#p-7-3-constrained-problem-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constrained optimization "
},
{
  "id": "ex-7-3-example2",
  "level": "2",
  "url": "Section-7-3.html#ex-7-3-example2",
  "type": "Example",
  "number": "7.32",
  "title": "",
  "body": "  Calculate the maximum and minimum values of   where and . Identify the points where these values are obtained.   "
},
{
  "id": "thm-constrained-eigs",
  "level": "2",
  "url": "Section-7-3.html#thm-constrained-eigs",
  "type": "Theorem",
  "number": "7.33",
  "title": "Extrema via Eigenvalues.",
  "body": " Extrema via Eigenvalues   Let , where is a real symmetric matrix with eigenvalues   and corresponding normalized eigenvectors   Under the constraint :   The maximum value of is , attained at .  The minimum value of is , attained at .    "
},
{
  "id": "ex-7-3-example4",
  "level": "2",
  "url": "Section-7-3.html#ex-7-3-example4",
  "type": "Example",
  "number": "7.34",
  "title": "",
  "body": "  Calculate the maximum value of , with , subject to the constraint . Identify a point where this maximum is obtained.    "
},
{
  "id": "thm-orth-constraint",
  "level": "2",
  "url": "Section-7-3.html#thm-orth-constraint",
  "type": "Theorem",
  "number": "7.35",
  "title": "Extrema with an Orthogonality Condition.",
  "body": " Extrema with an Orthogonality Condition   Let , where is a real symmetric matrix with eigenvalues   and corresponding eigenvectors   Subject to the constraints and :   The maximum value of is , attained at an eigenvector associated to .  The minimum value of is , attained at .   Here denotes the second largest eigenvalue of .   "
},
{
  "id": "ex-7-3-example3",
  "level": "2",
  "url": "Section-7-3.html#ex-7-3-example3",
  "type": "Example",
  "number": "7.36",
  "title": "",
  "body": "  Calculate the maximum and minimum values of , with , subject to and , where . Identifu points where the maximum and minimum values occur. The eigenvalues of are .   "
},
{
  "id": "Section-7-4",
  "level": "1",
  "url": "Section-7-4.html",
  "type": "Section",
  "number": "",
  "title": "7.4 Singular Value Decomposition",
  "body": " 7.4 Singular Value Decomposition   7.4 Singular Value Decomposition   Overview   Topics   The Singular Value Decomposition (SVD)  Applications of the SVD     Goals   Compute the SVD of a rectangular matrix.  Use the SVD to:  construct bases for the four fundamental subspaces,  construct spectral decompositions.        Singular Value Decomposition   Let be an matrix with rank . Then can be written as   where   is an orthogonal matrix,  is an orthogonal matrix,   is an diagonal matrix with diagonal entries , where .     Note that Singular Value Decomposition applies to any matrix , not just symmetric or square matrices.    Example 1: Geometry of a Linear Transformation    Consider the the linear transformation , where . Note that has an orthogonal diagonalization given by . Also, note that the orthogonal diagonalization of satisfies the properties of a Singular Value Decomposition. The parts below investigate how multiplication by acts on geometrically.     Can you describe geometrically what multiplication by does to an arbitrary vector ?      Instead of determining what does in one fell swoop, let us investigate what each factor of does. First, determine what multiplication by does to an arbitrary vector ?      Next, determine what multiplication by does to an arbitrary vector ?      Now, determine what multiplication by does to an arbitrary vector ?      Combining parts (b) - (d) above, give a geometric description of what multiplication by does to an arbitrary vector .       Singular Values  Recall from that multiplication by an orthogonal matrix does not change the angles between vectors nor the vector's length. Therefore, if is an orthogonal matrix, we have that the linear transformation must simply be a rotation and\/or reflection.  Note that multiplication by a diagonal matrix changes the vector from being in to being in , and then scales it along the appropriate coordinate axes.  Therefore, in general, we can use the SVD of a matrix to describe how the linear transformation acts on the vectors in .   Visualization of the SVD expressing a matrix as rotations and scalings.       Algorithm for Finding the SVD of   How do we find the SVD of a matrix ?   Start by forming the symmetric matrix and finding its eigenvalues , with the eigenvalues assigned in nonincreasing order. Set . These are the singular values of and they are the entries on the diagonal of . Fill any missing diagonal elements with 0.   Since is symmetric, we know from that it has real eigenvalues. A bonus fact is that for symmetric matrices of the form , the eigenvalues must be nonnegative, so        Next, find  normalized and orthogonal eigenvectors of and call them , with corresponding to eigenvalue . These vectors form the rows of .   Make sure to find enough orthonormal eigenvectors for each repeated eigenvalue, which we know we can do by .    Alternatively, we can think of the as the columns of , but since SVD uses , it is usually easier to think with respect to .       Use the formula to find the columns of . If the rank of is less than , then this formula will not produce enough columns to fill . We must find the remaining columns by extending the set to an orthonormal basis of .   The calculated vectors will be normalized and orthogonal to one another as long as the original were.    If the rank of is less than , then some of the eigenvalues found in (1) will be 0, which results in singular values of 0. These singular values can not be used in the formula, since that would result in dividing by 0.            Examples    Construct the SVD of          Construct the SVD of        Applications of the SVD  The SVD has been applied to many modern applications in CS, engineering, and mathematics. Some applications are:  Constructing bases for the four fundamental subspaces  Forming approximations of a matrix  Estimating the rank and the condition number of a matrix  Computing the pseudoinverse of a matrix  Linear least-squares problems  Non-linear least-squares problems  Image compression  Machine learning and data mining  Facial Recognition  Principal component analysis    Students are expected to be familiar with the first two items. We will explore these two items below.     Let be an matrix with rank .  Consider the columns of :   Recall that the formula for calculating the first few columns of is .    It follows that is a set of vectors that all live in .    Therefore, the first columns of form an for     Since the remaining columns of are created so that all columns of form an orthonormal basis for , we see that is a set of vectors which live in .    Therefore, the last columns of form an for .   Now, consider the rows of :   The last rows of are eigenvectors of which correspond to an eigenvalue of .    Therefore, form an for .    We have that . Thus, the last rows of form an for .    Since is an orthogonal matrix, we know that it's rows form an orthonormal basis for . Therefore, is a set of vectors which live in .    It follows that the first rows of form an for .         Let be an matrix with rank and with SVD , where Then,    for .     is an orthonormal basis for .     is an orthonormal basis for .     is an orthonormal basis for .     is an orthonormal basis for .      A graphic depicting the relationship between the rows of V transpose and the columns of U.         Let for . Find an orthonormal basis for each of the four subspaces.       SVD and Spectral Decomposition  We can create the spectral decomposition for a general matrix in a similar way to .    Let be the SVD of a rank matrix, with the columns of given by , the entries on the diagonal of given by , and the rows of given by . Then, the spectral decomposition of is given by       Find the spectral decomposition of . Use the decomposition to identify the best rank 1 approximation of .       We end this section, and this course, by investigating the connection between Spectral Decomposition and Image Compression. Consider an image in grayscale consisting of pixels in a grid. Since each pixel is in grayscale, we can assign it an integer value between 0 and 255 depending on how gray it is, where 0 is black and 255 is white. We can form a matrix where each entry is the grayscale value of the associated pixel. In general, the rank of this matrix could be quite high.  For example, suppose we have selected an image and created the associated matrix and it has rank . One way to store this image in a slightly compressed manner is to store the basis vectors for , and then store a list of linear combinations describing how to use these vectors to recreate all columns (the dimensions of an image are reversed, first horizontal, then vertical).    Could we compress the file size further? Suppose we were okay with a little error in our image. Perhaps just a hair of fuzziness that could be corrected open reopening the compressed file. How could we go about doing this?      The idea is to find a good enough approximation of the image. We can use Spectral Decomposition to find the best rank approximation for . We can save tons of storage by letting be small, but then our image will be super blurry. We can have a very accurate image by letting be large, but then the compression's filesize is not much smaller than the original's filesize. We need to find a which balances these, a good approximation with small filesize.  Here is the best rank 1 approximation for the image. Can you tell what the image is?  Rank 1 approximation of image.    Proceed through the next few images slowly so as not to spoil the surprise.    Here is the best rank 2 approximation for the image. Can you tell what the image is?  Rank 2 approximation of image.      Here is the best rank 4 approximation for the image. Can you tell what the image is?  Rank 4 approximation of image.      Here is the best rank 8 approximation for the image. Can you tell what the image is?  Rank 8 approximation of image.      Here is the best rank 30 approximation for the image. Can you tell what the image is?  Rank 30 approximation of image.      "
},
{
  "id": "obj-7-4-topics-goals",
  "level": "2",
  "url": "Section-7-4.html#obj-7-4-topics-goals",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   The Singular Value Decomposition (SVD)  Applications of the SVD   "
},
{
  "id": "p-7-4-overview-3",
  "level": "2",
  "url": "Section-7-4.html#p-7-4-overview-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Compute the SVD of a rectangular matrix.  Use the SVD to:  construct bases for the four fundamental subspaces,  construct spectral decompositions.     "
},
{
  "id": "thm-svd",
  "level": "2",
  "url": "Section-7-4.html#thm-svd",
  "type": "Theorem",
  "number": "7.37",
  "title": "Singular Value Decomposition.",
  "body": " Singular Value Decomposition   Let be an matrix with rank . Then can be written as   where   is an orthogonal matrix,  is an orthogonal matrix,   is an diagonal matrix with diagonal entries , where .    "
},
{
  "id": "ex-7-4-ellipse",
  "level": "2",
  "url": "Section-7-4.html#ex-7-4-ellipse",
  "type": "Example",
  "number": "7.38",
  "title": "",
  "body": "  Consider the the linear transformation , where . Note that has an orthogonal diagonalization given by . Also, note that the orthogonal diagonalization of satisfies the properties of a Singular Value Decomposition. The parts below investigate how multiplication by acts on geometrically.     Can you describe geometrically what multiplication by does to an arbitrary vector ?      Instead of determining what does in one fell swoop, let us investigate what each factor of does. First, determine what multiplication by does to an arbitrary vector ?      Next, determine what multiplication by does to an arbitrary vector ?      Now, determine what multiplication by does to an arbitrary vector ?      Combining parts (b) - (d) above, give a geometric description of what multiplication by does to an arbitrary vector .    "
},
{
  "id": "handout-section-7-4-svd-5-1",
  "level": "2",
  "url": "Section-7-4.html#handout-section-7-4-svd-5-1",
  "type": "Note",
  "number": "7.39",
  "title": "Algorithm for Finding the SVD of <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": " Algorithm for Finding the SVD of   How do we find the SVD of a matrix ?   Start by forming the symmetric matrix and finding its eigenvalues , with the eigenvalues assigned in nonincreasing order. Set . These are the singular values of and they are the entries on the diagonal of . Fill any missing diagonal elements with 0.   Since is symmetric, we know from that it has real eigenvalues. A bonus fact is that for symmetric matrices of the form , the eigenvalues must be nonnegative, so        Next, find  normalized and orthogonal eigenvectors of and call them , with corresponding to eigenvalue . These vectors form the rows of .   Make sure to find enough orthonormal eigenvectors for each repeated eigenvalue, which we know we can do by .    Alternatively, we can think of the as the columns of , but since SVD uses , it is usually easier to think with respect to .       Use the formula to find the columns of . If the rank of is less than , then this formula will not produce enough columns to fill . We must find the remaining columns by extending the set to an orthonormal basis of .   The calculated vectors will be normalized and orthogonal to one another as long as the original were.    If the rank of is less than , then some of the eigenvalues found in (1) will be 0, which results in singular values of 0. These singular values can not be used in the formula, since that would result in dividing by 0.         "
},
{
  "id": "ex-7-4-example1",
  "level": "2",
  "url": "Section-7-4.html#ex-7-4-example1",
  "type": "Example",
  "number": "7.40",
  "title": "",
  "body": "  Construct the SVD of    "
},
{
  "id": "ex-7-4-example2",
  "level": "2",
  "url": "Section-7-4.html#ex-7-4-example2",
  "type": "Example",
  "number": "7.41",
  "title": "",
  "body": "  Construct the SVD of    "
},
{
  "id": "thm-SVD-ortho-subspaces",
  "level": "2",
  "url": "Section-7-4.html#thm-SVD-ortho-subspaces",
  "type": "Theorem",
  "number": "7.42",
  "title": "",
  "body": "  Let be an matrix with rank and with SVD , where Then,    for .     is an orthonormal basis for .     is an orthonormal basis for .     is an orthonormal basis for .     is an orthonormal basis for .      A graphic depicting the relationship between the rows of V transpose and the columns of U.    "
},
{
  "id": "handout-section-7-4-svd-11-1",
  "level": "2",
  "url": "Section-7-4.html#handout-section-7-4-svd-11-1",
  "type": "Example",
  "number": "7.43",
  "title": "",
  "body": "  Let for . Find an orthonormal basis for each of the four subspaces.   "
},
{
  "id": "p-7-4-spectral-connection-2",
  "level": "2",
  "url": "Section-7-4.html#p-7-4-spectral-connection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spectral decomposition "
},
{
  "id": "thm-",
  "level": "2",
  "url": "Section-7-4.html#thm-",
  "type": "Theorem",
  "number": "7.44",
  "title": "",
  "body": "  Let be the SVD of a rank matrix, with the columns of given by , the entries on the diagonal of given by , and the rows of given by . Then, the spectral decomposition of is given by    "
},
{
  "id": "p-7-4-spectral-connection-4",
  "level": "2",
  "url": "Section-7-4.html#p-7-4-spectral-connection-4",
  "type": "Example",
  "number": "7.45",
  "title": "",
  "body": "  Find the spectral decomposition of . Use the decomposition to identify the best rank 1 approximation of .   "
},
{
  "id": "handout-section-7-4-svd-13-3",
  "level": "2",
  "url": "Section-7-4.html#handout-section-7-4-svd-13-3",
  "type": "Question",
  "number": "7.46",
  "title": "",
  "body": "  Could we compress the file size further? Suppose we were okay with a little error in our image. Perhaps just a hair of fuzziness that could be corrected open reopening the compressed file. How could we go about doing this?   "
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
