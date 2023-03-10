render.io
Darmowe bezterminowo ale wolne.

To od githuba porada:
$ echo "# praktyki-230310" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/cichocki20p/praktyki-230310.git
$ git push -u origin main

clone - (tylko na początku) tworzy lokalne repozytorium (folder .git)
pull - aktualizacja stanu lokalnie do tego który jest na serwerze (porównuje .git lokalny i .git na serwerze)
push - aktualizacja stanu na serwerze do tego który jest lokalnie
commit - aktualizacja lokalnego repozytorium (lokalnego folderu .git)
add - dodanie pliku do stagingu (zaznaczenie który plik będę commitował) 

- logowanie na render.io przy użyciu konta gitHuba
- połączenie render.io z repozytoriami na moim koncie gitHubowym
- DockerFile przetrawiony przez render.io
- serwis działa na https://praktyki-0310.onrender.com/
- mogę spróbować opakować moje phpowe projekty w dockery i zahostować na render.io