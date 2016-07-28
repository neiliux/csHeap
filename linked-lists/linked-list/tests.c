#include <stdio.h>
#include <setjmp.h>
#include <stdlib.h>
#include "cmocka/cmocka.h"
#include "linked-list.h"

static Node* create_linked_list(int);

static void linked_list_should_have_expected_nodes()
{
    Node *head = create_linked_list(10);
    
    int count = get_linked_list_node_count(head);
    
    assert_int_equal(10, count); 
}

static Node *create_linked_list(int node_count)
{
    Node *node = create_node(0, NULL);
    Node *head = node;

    for (int i=1; i<node_count; i++)
    {
        Node *nextNode = create_node(i, NULL);
        node->next = nextNode;
        node = nextNode;
    }

    return head;
}

int main()
{
    const struct CMUnitTest tests[] =
    {
        cmocka_unit_test(linked_list_should_have_expected_nodes)
    };

    return cmocka_run_group_tests(tests, NULL, NULL);
}
