#nullable enable

namespace todo_pilet{
    public class ToDoItem
    {
        public int ID { get; set; } 
        public string? Title { get; set; }
        public bool IsDone { get; set; }
    }
}