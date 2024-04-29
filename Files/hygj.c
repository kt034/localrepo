#include <stdio.h>
#include <stdlib.h>

void addTask(FILE *file) {
    char task[100];
    printf("Enter a task: ");
    fgets(task, sizeof(task), stdin);
    fprintf(file, "%s", task);
    printf("Task added successfully!\n");
}

void viewTasks(FILE *file) {
    char task[100];
    printf("\nTasks:\n");
    rewind(file);  // Move the file pointer to the beginning

    while (fgets(task, sizeof(task), file) != NULL) {
        printf("%s", task);
    }

    printf("\n");
}

int main() {
    FILE *todoFile;
    todoFile = fopen("todolist.txt", "a+");

    if (todoFile == NULL) {
        perror("Error opening file");
        return EXIT_FAILURE;
    }

    int choice;

    do {
        printf("1. Add Task\n");
        printf("2. View Tasks\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar(); // Consume the newline character left in the buffer

        switch (choice) {
            case 1:
                addTask(todoFile);
                break;
            case 2:
                viewTasks(todoFile);
                break;
            case 3:
                printf("Exiting program.\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 3);

    fclose(todoFile);

    return 0;
}
