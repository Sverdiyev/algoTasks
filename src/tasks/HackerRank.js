// didnt work because of nodejs

class NotesStore {
  constructor(notes = []) {
    this.notes = notes;
  }

  addNote = (state, name) => {
    if (!name) return 'Name cannot be empty';
    if (state === 'active' || state === 'completed' || state === 'others') {
      this.notes.push({ state, name });
      return;
    }
    return `Invalid state ${state}`;
  };

  getNotes(state) {
    if (state === 'active' || state === 'completed' || state === 'others') {
      const result = this.notes.filter((item) => {
        if (item.state === state) return true;
      });

      return result.map((item) => item.name);
    }
    return `Error: Invalid state ${state}`;
  }
}

export const s = new NotesStore();
