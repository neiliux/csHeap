typedef struct Node {
    struct Node *next;
    int value;
} Node;

int get_linked_list_node_count(Node);
Node *create_node(int, Node);
void add_to_end_of_list(Node, Node);
void add_to_start_of_list(Node, Node);

