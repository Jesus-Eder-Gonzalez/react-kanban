function handleInputChange(event) {
  switch (event.target.id) {
    case 'title':
      this.setState({ titleInput: event.target.value });
      break;
    case 'body':
      this.setState({ bodyInput: event.target.value });
      break;
    case 'created_by':
      this.setState({ createdInput: event.target.value });
      break;
    case 'assigned_to':
      this.setState({ assignedInput: event.target.value });
      break;
    case 'priority_id':
      this.setState({ priorityInput: event.target.value });
      break;
    case 'status_id':
      this.setState({ statusInput: event.target.value });
      break;
    default:
      break;
  }
}

export default handleInputChange;