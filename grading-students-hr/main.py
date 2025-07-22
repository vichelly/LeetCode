def gradingStudents(grades):
    # Write your code here
    correct_grades = []
    for grade in grades:
        next_multiple_of_five = ((grade//5)+1)*5
        if(grade < 38):
            correct_grades.append(grade)
        elif((next_multiple_of_five - grade) < 3):
            correct_grades.append(next_multiple_of_five)
        else:
            correct_grades.append(grade)
    return correct_grades


