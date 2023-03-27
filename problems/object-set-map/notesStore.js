class NotesStore {
    notes = [{
            name: 'meeting',
            state: 'completed'
        },
        {
            name: 'class',
            state: 'active'
        },
        {
            name: 'shopping',
            state: 'active'
        },
        {
            name: 'budget',
            state: 'completed'
        },
        {
            name: 'travel',
            state: 'active'
        }
    ];

    addNote(state, name) {
        if (!name) {
            throw new Error('Name cannot be empty');
        }

        if (name && (state === 'active') || (state === 'completed') || (state === 'others')) {
            let newNote = {
                name: name,
                state: state
            };
            this.notes.push(newNote);
        } else {
            throw new Error(`Invalid state ${state}`);
        }

    }

    getNotes(state) {
        let notesWithGivenState = [];
        if (state === 'active' || state === 'completed' || state === 'others') {
            for (let i = 0; i < this.notes.length; i++) {
                if (this.notes[i].state == state) {
                    notesWithGivenState.push(this.notes[i].name);
                }
            }
            return notesWithGivenState;
        } else {
            throw new Error(`Invalid state ${state}`);
        }
    }
}

var n = new NotesStore();

console.log(n.getNotes('others'));
// n.print();