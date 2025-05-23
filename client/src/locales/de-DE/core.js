import dateFns from 'date-fns/locale/de';
import timeAgo from 'javascript-time-ago/locale/de';

export default {
  dateFns,
  timeAgo,

  format: {
    date: 'd.MM.yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd. MMM',
    longDateTime: "d. MMMM yy 'um' p",
    fullDate: 'd. MMM. y',
    fullDateTime: "d. MMMM. y 'um' p",
  },

  translation: {
    common: {
      aboutPlanka: 'Über PLANKA',
      account: 'Konto',
      actions: 'Aktionen',
      active: 'Aktiv',
      addAttachment_title: 'Anhang hinzufügen',
      addCustomField_title: 'Datenfeld hinzufügen',
      addCustomFieldGroup_title: 'Feldgruppe hinzufügen',
      addManager_title: 'Projektleiter hinzufügen',
      addMember_title: 'Mitglied hinzufügen',
      addUser_title: 'Benutzer hinzufügen',
      admin: 'Administrator',
      administration: 'Verwaltung',
      all: 'Alle',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Alle Änderungen werden automatisch gespeichert, sobald die Verbindung wiederhergestellt wurde.',
      areYouSureYouWantToDeleteThisAttachment:
        'Sind Sie sicher, dass Sie diesen Anhang löschen möchten?',
      areYouSureYouWantToDeleteThisBoard:
        'Sind Sie sicher, dass Sie diesen Arbeitsbereich löschen möchten?',
      areYouSureYouWantToDeleteThisCard: 'Sind Sie sicher, dass Sie diese Karte löschen möchten?',
      areYouSureYouWantToDeleteThisComment:
        'Sind Sie sicher, dass Sie diesen Kommentar löschen möchten?',
      areYouSureYouWantToDeleteThisCustomField:
        'Sind Sie sicher, dass Sie dieses Datenfeld löschen möchten?',
      areYouSureYouWantToDeleteThisCustomFieldGroup:
        'Sind Sie sicher, dass Sie diese Feldgruppe löschen möchten?',
      areYouSureYouWantToDeleteThisLabel: 'Sind Sie sicher, dass Sie dieses Label löschen möchten?',
      areYouSureYouWantToDeleteThisList: 'Sind Sie sicher, dass Sie diese Liste löschen möchten?',
      areYouSureYouWantToDeleteThisProject:
        'Sind Sie sicher, dass Sie dieses Projekt löschen möchten?',
      areYouSureYouWantToDeleteThisTask: 'Sind Sie sicher, dass Sie diese Aufgabe löschen möchten?',
      areYouSureYouWantToDeleteThisUser:
        'Sind Sie sicher, dass Sie diesen Benutzer löschen möchten?',
      areYouSureYouWantToLeaveBoard:
        'Sind Sie sicher, dass Sie den Arbeitsbereich verlassen möchten?',
      areYouSureYouWantToLeaveProject: 'Sind Sie sicher, dass Sie das Projekt verlassen möchten?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Sind Sie sicher, dass Sie diesen Projektleiter aus dem Projekt entfernen möchten?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Sind Sie sicher, dass Sie dieses Mitglied aus dem Arbeitsbereich entfernen möchten?',
      attachment: 'Anhang',
      attachments: 'Anhänge',
      authentication: 'Authentifizierung',
      background: 'Hintergrund',
      baseCustomFields_title: 'Feldgruppe',
      baseGroup: 'Feldgruppe',
      board: 'Arbeitsbereich',
      boardNotFound_title: 'Arbeitsbereich nicht gefunden',
      boardUser: 'Benutzer',
      canBeInvitedToWorkInBoards: 'Kann zu Projekten und Boards eingeladen werden.',
      canComment: 'Kann kommentieren',
      canCreateOwnProjectsAndBeInvitedToWorkInOthers:
        'Kann eigene Projekte erstellen und in Andere eingeladen werden.',
      canEditBoardLayoutAndAssignMembersToCards:
        'Kann den Arbeitsbereich layout bearbeiten und Benutzern Karten uiweisen.',
      canManageSystemWideSettingsAndActAsProjectOwner:
        'Kann systemweite Einstellungen vornehmen und als Projektleiter arbeiten.',
      canOnlyViewBoard: 'Kann das Board nur ansehen.',
      cardActions_title: 'Kartenaktionen',
      cardNotFound_title: 'Karte nicht gefunden',
      cardsOnThisListAreAvailableToAllBoardMembers:
        'Cards on this list are available to all Arbeitsbereich members.',
      closed: 'Geschlossen',
      color: 'Farbe',
      copy_inline: 'kopieren',
      createBoard_title: 'Arbeitsbereich erstellen',
      createCustomFieldGroup_title: 'Feldgruppe erstellen',
      createLabel_title: 'Label erstellen',
      createNewOneOrSelectExistingOne: 'Create a new one or select<br />an existing one.',
      createProject_title: 'Projekt erstellen',
      createTextFile_title: 'Textdatei erstellen',
      currentPassword: 'Derzeitiges Passwort',
      customField_title: 'Feldgruppe',
      customFields_title: 'Feldgruppen',
      customFieldGroup_title: 'Feldgruppe',
      dangerZone_title: 'Gefahrenbereich',
      date: 'Datum',
      deleteAttachment_title: 'Anhang löschen',
      deleteBoard_title: 'Arbeitsbereich löschen',
      deleteCard_title: 'Karte löschen',
      deleteComment_title: 'Kommentar löschen',
      deleteCustomField_title: 'Datenfeld löschen',
      deleteCustomFieldGroup_title: 'Feldgruppe löschen',
      deleteLabel_title: 'Label löschen',
      deleteList_title: 'Liste löschen',
      deleteProject_title: 'Projekt löschen',
      deleteTask_title: 'Aufgabe löschen',
      deleteUser_title: 'Benutzer löschen',
      description: 'Beschreibung',
      detectAutomatically: 'Automatisch erkennen',
      dropFileToUpload: 'Datei für Upload ablegen',
      dueDate_title: 'Fälligkeitsdatum',
      editor: 'Verwalter',
      editAttachment_title: 'Anhang bearbeiten',
      editAvatar_title: 'Profilbild bearbeiten',
      editColor_title: 'Farbe bearbeiten',
      editCustomField_title: 'Datenfeld bearbeiten',
      editCustomFieldGroup_title: 'Feldgruppe bearbeiten',
      editDueDate_title: 'Fälligkeitsdatum bearbeiten',
      editEmail_title: 'E-mail Adresse ändern',
      editInformation_title: 'Informationen bearbeiten',
      editLabel_title: 'Label bearbeiten',
      editPassword_title: 'Passwort ändern',
      editPermissions_title: 'Benutzerrolle ändern',
      editRole_title: 'Rolle zuweisen',
      editStopwatch_title: 'Stoppuhr bearbeiten',
      editType_title: 'Typ ändern',
      editUsername_title: 'Benutzername ändern',
      email: 'E-mail',
      enterCardTitle: 'Kartentitel eingeben...',
      enterDescription: 'Beschreibung eingeben...',
      enterFilename: 'Dateiname eingeben',
      enterListTitle: 'Listentitel eingeben...',
      enterTaskDescription: 'Aufgabenbeschreibung eingeben...',
      filterByLabels_title: 'Nach Label filtern',
      filterByMembers_title: 'Nach Mitgliedern filtern',
      fromComputer_title: 'Vom Computer',
      fromTrello: 'Von Trello',
      general: 'Allgemein',
      hours: 'Stunden',
      importBoard_title: 'Board importieren',
      invalidCurrentPassword: 'Das aktuelle Passwort ist falsch',
      labels: 'Labels',
      language: 'Sprache',
      leaveBoard_title: 'Arbeitsbereich verlassen',
      leaveProject_title: 'Projekt verlassen',
      list: 'Liste',
      lists: 'Listen',
      listActions_title: 'Aufgaben auflisten',
      managers: 'Projektleiter',
      members: 'Mitglieder',
      memberActions_title: 'Mitglieder-Aktionen',
      minutes: 'Minuten',
      moveCard_title: 'Karte verschieben',
      name: 'Name',
      newestFirst: 'Neueste zuerst',
      newEmail: 'Neue E-Mail-Adresse',
      newPassword: 'Neues Passwort',
      newUsername: 'Neuer Benutzername',
      noConnectionToServer: 'Keine Verbindung zum Server',
      noBoards: 'Keine Arbeitsbereiche',
      noLists: 'Keine Listen',
      noProjects: 'Keine Projekte',
      notifications: 'Benachrichtigungen',
      noUnreadNotifications: 'Keine ungelesenen Benachrichtigungen.',
      oldestFirst: 'Älteste zuerst',
      openBoard_title: 'Arbeitsbereich öffnen',
      optional_inline: 'Optional',
      organization: 'Organisation',
      phone: 'Telefon',
      preferences: 'Voreinstellungen',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tipp: Drücken Sie STRG-V (Cmd-V auf Mac), um einen Anhang aus der Zwischenablage hinzuzufügen.',
      project: 'Projekt',
      projectNotFound_title: 'Projekt nicht gefunden',
      projectOwner: 'Projektleitung',
      referenceDataAndKnowledgeStorage: 'Speichern von Wissen und Referenzen.',
      removeManager_title: 'Projektleiter entfernen',
      removeMember_title: 'Mitglied entfernen',
      role: 'Rolle',
      searchCards: 'Karte suchen...',
      searchCustomFields: 'In Feldgruppen suchen...',
      searchLabels: 'Label suchen...',
      searchLists: 'Liste suchen...',
      searchMembers: 'Mitglied suchen...',
      searchUsers: 'Benutzer suchen...',
      seconds: 'Sekunden',
      selectBoard: 'Arbeitsbereich auswählen',
      selectList: 'Liste auswählen',
      selectPermissions_title: 'Berechtigungen auswählen',
      selectProject: 'Projekt auswählen',
      selectRole_title: 'Rolle auswählen',
      selectType_title: 'Typ auswählen',
      settings: 'Einstellungen',
      sortList_title: 'Liste sortieren',
      stopwatch: 'Stoppuhr',
      story: 'Wissen',
      subscribeToMyOwnCardsByDefault: 'Standardmäßig meine eigenen Karten abonnieren',
      taskActions_title: 'Aufgabenaktionen',
      taskAssignmentAndProjectCompletion: 'Verwaltung von Aufgaben und Projekten.',
      thereIsNoPreviewAvailableForThisAttachment: 'Für diesen Anhang ist keine Vorschau verfügbar.',
      time: 'Zeit',
      title: 'Titel',
      userActions_title: 'Benutzeraktionen',
      userAddedThisCardToList: '<0>{{user}}</0><1> hat diese Karte hinzugefügt zu {{list}}</1>',
      userLeftNewCommentToCard:
        '{{user}} hat einen neuen Kommentar verfasst: «{{comment}}» in <2>{{card}}</2>',
      userMovedCardFromListToList:
        '{{user}} bewegte <2>{{card}}</2> von {{fromList}} nach {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> bewegte diese Karte von {{fromList}} nach {{toList}}</1>',
      username: 'Benutzername',
      users: 'Benutzer',
      viewer: 'Betrachter',
      writeComment: 'Kommentar verfassen...',
    },

    action: {
      addAnotherCard: 'Karte hinzufügen',
      addAnotherList: 'Liste hinzufügen',
      addAnotherTask: 'Aufgabe hinzufügen',
      addCard: 'Karte hinzufügen',
      addCard_title: 'Karte hinzufügen',
      addComment: 'Kommentar hinzufügen',
      addCustomField: 'Datenfeld hinzufügen',
      addCustomFieldGroup: 'Feldgruppe hinzufügen',
      addList: 'Liste hinzufügen',
      addMember: 'Mitglied hinzufügen',
      addMoreDetailedDescription: 'Eine detaillierte Beschreibung hinzufügen',
      addTask: 'Aufgabe hinzufügen',
      addToCard: 'Zu Karte hinzufügen',
      addUser: 'Benutzer hinzufügen',
      createBoard: 'Arbeitsbereich erstellen',
      createCustomFieldGroup: 'Feldgruppe erstellen',
      createFile: 'Datei erstellen',
      createLabel: 'Label erstellen',
      createNewLabel: 'Neues Label erstellen',
      createProject: 'Projekt erstellen',
      delete: 'Löschen',
      deleteAttachment: 'Anhang löschen',
      deleteAvatar: 'Avatar löschen',
      deleteBoard: 'Arbeitsbereich löschen',
      deleteCard: 'Karte löschen',
      deleteCard_title: 'Karte löschen',
      deleteComment: 'Kommentar löschen',
      deleteCustomField: 'Datenfeld löschen',
      deleteCustomFieldGroup: 'Feldgruppe löschen',
      deleteGroup: 'Gruppe löschen',
      deleteLabel: 'Label löschen',
      deleteList: 'Liste löschen',
      deleteList_title: 'Liste löschen',
      deleteProject: 'Projekt löschen',
      deleteProject_title: 'Projekt löschen',
      deleteTask: 'Aufgabe löschen',
      deleteTask_title: 'Aufgabe löschen',
      deleteUser: 'Benutzer löschen',
      edit: 'Bearbeiten',
      editColor_title: 'Farbe bearbeiten',
      editDueDate_title: 'Fälligkeitsdatum bearbeiten',
      editDescription_title: 'Beschreibung ändern',
      editEmail_title: 'E-Mail-Adresse bearbeiten',
      editGroup: 'Gruppe bearbeiten',
      editInformation_title: 'Informationen bearbeiten',
      editPassword_title: 'Passwort ändern',
      editPermissions: 'Berechtigungen ändern',
      editRole_title: 'Rolle zuweisen',
      editStopwatch_title: 'Stoppuhr bearbeiten',
      editTitle_title: 'Titel bearbeiten',
      editType_title: 'Typ ändern ',
      editUsername_title: 'Benutzername ändern',
      import: 'Import',
      leaveBoard: 'Arbeitsbereich verlassen',
      leaveProject: 'Projekt verlassen',
      logOut_title: 'Ausloggen',
      makeCover_title: 'Als Vorschau festlegen',
      move: 'Verschieben',
      moveCard_title: 'Karte bewegen',
      remove: 'Löschen',
      removeColor: 'Farbe löschen',
      removeCover_title: 'Vorschau löschen',
      removeFromBoard: 'Vom Arbeitsbereich entfernen',
      removeFromProject: 'Vom Projekt entfernen',
      removeManager: 'Projektleiter entfernen',
      removeMember: 'Mitglied entfernen',
      save: 'Speichern',
      showAllAttachments: 'Alle Anhänge anzeigen ({{hidden}} versteckt)',
      showCardsWithThisUser: 'Karten mit diesem Benutzer zeigen',
      showFewerAttachments: 'Weniger Anhänge anzeigen',
      sortList_title: 'Liste sortieren',
      start: 'Start',
      stop: 'Stopp',
      subscribe: 'Abonnieren',
      unsubscribe: 'De-abonnieren',
      uploadNewAvatar: 'Neuen Avatar hochladen',
      uploadNewImage: 'Neues Bild hochladen',
    },
  },
};
