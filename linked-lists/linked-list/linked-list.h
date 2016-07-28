typedef struct Node {
    struct Node *next;
    int value;
} Node;

int get_linked_list_node_count(Node);
Node *create_node(int, Node);

