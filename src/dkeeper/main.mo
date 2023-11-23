import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Bool "mo:base/Bool";

actor DKeeper{
  public type Note={
    id:Nat;
    title:Text;
    content:Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();


public func createNote(idNum:Nat,titleText:Text,contentText:Text){
  let newNote:Note={
    id=idNum;
    title=titleText;
    content=contentText;
  };

notes := List.push(newNote, notes);
Debug.print(debug_show(notes));

};

public func deleteIt(id:Nat) {
         notes := List.filter<Note>(notes, func n { n.id != id });
         Debug.print(debug_show(notes));
     };


public query func readNotes(): async [Note]{
  return List.toArray(notes);
};

}

