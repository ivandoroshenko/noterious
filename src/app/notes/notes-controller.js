'use strict';

angular.module('noterious')
  .controller('NotesCtrl', function (currentAuth) {
    var notes = this;

    console.log('currentAuth', currentAuth);


    /*
    var getBoardTitle = function () {
      var boardId, boardUrl, boardRef;

      boardId = $routeParams.boardId;
      boardUrl = 'https://noterious.firebaseio.com/users/' + UserModel.getCurrentUserId() + '/boards/' + boardId + '/title';
      boardRef = new Firebase(boardUrl);

      boardRef.once('value', function (snapshot) {
        $scope.$apply(function () {
          $scope.boardTitle = snapshot.val();
        });
      });
    };

    var setupNotes = function () {
      var boardId, notesUrl, notesRef, notesPromise;

      boardId = $routeParams.boardId;
      notesUrl = 'https://noterious.firebaseio.com/users/' + UserModel.getCurrentUserId() + '/boards/' + boardId + '/notes';
      notesRef = new Firebase(notesUrl);

      notesPromise = $firebaseArray(notesRef, $scope, 'notes');

      notesPromise.then(function (disassociate) {
        $scope.createNote = function (note) {
          $scope.notes[notesRef.push().name()] = {title: note.title, content: note.content};
        };

        $scope.deleteNote = function (noteId) {
          delete $scope.notes[noteId];
        };

        $scope.disassociateModel = disassociate;
      });
    };

    $scope.newNote = {
      title: '',
      content: ''
    };

    $scope.resetForm = function () {
      $scope.newNote = {
        title: '',
        content: ''
      };
    };

    $scope.$on('onLogin', function () {
      getBoardTitle();
      setupNotes();
    });

    $scope.$on('onLogout', function () {
      // $scope.disassociateModel();
    });

    $scope.loading = function () {
      return UserModel.loading();
    };

    $scope.userExists = function () {
      return UserModel.userExists();
    };

    // If a user and content has been loaded
    if ($scope.userExists()) {
      getBoardTitle();
      setupNotes();
    }
    */
  });