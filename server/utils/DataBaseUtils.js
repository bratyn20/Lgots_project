import mongoose from 'mongoose';

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost:8080/notes');
};

export function listNotes(){
    return Note.find();
}