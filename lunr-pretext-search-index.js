var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   Systems of Linear Equations    Topics and Objectives   Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions     Goals   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.     A Single Linear Equation  A linear equation has the form: where, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).   Examples:  is a line in two dimensions.  is a plane in three dimensions.       Systems of Linear Equations  When we have more than one linear equation, we have a system of linear equations . For example, a system of two linear equations is:       Solution to a Linear System  The set of all possible values of that satisfy every equation in the system is the solution, or solution set, to the system.    How many solutions can a system have?     Two-Dimensional Case   Consider the following systems of two linear equations in two variables and determine how many solutions there are for each.                Conclusion: A system of linear equations in two variables can have solutions.       Three-Dimensional Case  An equation linear equation in three variables, , defines a plane in .    How many solutions can a system of two linear equations in three variables have?      How many solutions can a system of three linear equations in three variables have?     Conclusion: Every system of linear equations, no matter the number of equations and number of variables has solutions.     Row Reduction by Elementary Row Operations  As we saw in the previous examples, one way to solve a system of linear equations is by graphing. This is not practical for most examples, especially if we are working with four or more varialbes. A more useful approach to solving a linear system is to manipulate the equations through the use of row operations .    Replacement\/Addition: add a multiple of one row to another.  Interchange: swap two rows.  Scaling: multiply a row by a nonzero scalar.       Example of Row Reduction   Apply row operations to systematically simplify the system below to an equivalent (easier to read) form in order to more easily identify the solution(s).       Augmented Matrices  It’s redundant to write variables repeatedly, so we use a augmented matrix to simplify the notation for the system. For example, the previous system Can be writen as the augmented matrix The vertical bar separates the coefficient matrix (for ) from the constants.   Determine if the following system has a solution.       Consistent Systems and Row Equivalence   Consistent  A linear system is consistent if it has at least one solution . Otherwise, it is inconsistent .    Row Equivalence  Two matrices are row equivalent if a sequence of row operations transforms one matrix into the other.    Note : If the augmented matrices of two linear systems are row equivalent, they have the same solution set.   Fundamental Questions : Two questions that we will revisit many times throughout the course:  Does a given linear system have a solution? In other words, is it consistent?  If it is consistent, is the solution unique?      "
},
{
  "id": "section-1-1-2-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-2-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions   "
},
{
  "id": "section-1-1-2-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-2-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.   "
},
{
  "id": "section-1-1-2-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-2-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "A Single Linear Equation.",
  "body": " A Single Linear Equation  A linear equation has the form: where, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).  "
},
{
  "id": "section-1-1-3-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution, or solution set, "
},
{
  "id": "section-1-1-4-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-4-2",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Consider the following systems of two linear equations in two variables and determine how many solutions there are for each.                Conclusion: A system of linear equations in two variables can have solutions.   "
},
{
  "id": "section-1-1-5-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-5-3",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  How many solutions can a system of two linear equations in three variables have?   "
},
{
  "id": "section-1-1-5-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-5-4",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  How many solutions can a system of three linear equations in three variables have?   "
},
{
  "id": "section-1-1-6-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row operations "
},
{
  "id": "section-1-1-6-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Replacement\/Addition: Interchange: Scaling: "
},
{
  "id": "section-1-1-7-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-7-2",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " Apply row operations to systematically simplify the system below to an equivalent (easier to read) form in order to more easily identify the solution(s).   "
},
{
  "id": "section-1-1-8-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "section-1-1-8-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-8-3",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " Determine if the following system has a solution.   "
},
{
  "id": "section-1-1-9-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-2",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Consistent.",
  "body": " Consistent  A linear system is consistent if it has at least one solution . Otherwise, it is inconsistent .  "
},
{
  "id": "section-1-1-9-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-3",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Row Equivalence.",
  "body": " Row Equivalence  Two matrices are row equivalent if a sequence of row operations transforms one matrix into the other.  "
},
{
  "id": "section-1-1-9-5",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Questions "
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
