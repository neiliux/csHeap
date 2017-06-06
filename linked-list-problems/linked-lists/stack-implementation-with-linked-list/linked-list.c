#include <stddef.h>
#include "linked-list.h"
#include <stdio.h>
#include <stdlib.h>

Node *create_node(int value, Node *next)
{
    Node *node = (Node*)malloc(sizeof(Node));
    node->value = value;
    node->next = next;
    return node;
}

int get_linked_list_node_count(Node *head)
{
    int count = 0;
    while (head != NULL)
    {
        count++;
        head = head->next;
    
    }
    return count;
}
