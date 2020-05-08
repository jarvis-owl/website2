# public website

## TOC
- [Roadmap](#Roadmap)
- [Future](#Future)
- [Directories](#Directories)
- [Dependencies](#Dependencies)

## Roadmap
- [ ] __correct port forwarding__
- [ ] use [IPFS](https://ipfs.io/) content to support its use
    - Pin others content ?
    - [Host](https://medium.com/coinmonks/how-i-hosted-my-website-on-ipfs-431919d7440a) page also on IPFS
- [ ] IPTables ([ger](https://de.wikibooks.org/wiki/Linux-Praxisbuch/_Linux-Firewall_mit_IP-Tables))
- test bootstrap4
    - should be appealing on monitor and mobile
    - [ ] sidebar collapsed on mobile
- test cookies
    - [ ] display last visit timestamp
- [x] display users IP, Device, Browser, OS
- contents/subpages
    - linux cheatsheet (maybe other personal cheatsheets)
        - allow visitor to append to cheatsheet ? Security Issues?
    - [ ] MACs
    - [ ] Dice calc with nchoosek
    - Chart.js
        - [ ] µCs BME260 Data
        - [ ] Provide interface for µCs data (Temperature, RPM-Project, ...)
            - [x] Temperature
            - [ ] RPI Project
            - [ ] Sun's brightness (for a future lamp to turn on/off)
- [ ] repeating background texture
- [ ] Favicon

## Additional scripts required
- `temp_log.sh >> /Tcore.log`

## Future
- [x] use Docker
    - start container `docker run -d --restart=always --name website2 -p 80:80 -v /home/pi/website:/usr/local/apache2/htdocs/ httpd:latest`
    - [ ] test nginx?
- [ ] Test cloud server with Kubernetes

## Directories
- /img

    Contains displayed images and pictures

- /src

    Contains all javascript code

- /style

    Contains CSS Style

## Dependencies
Hopefully sometime I can provide a dockerfile. This is sofar based on Apache2.4 with PHP7.X

The [receiving side](https://github.com/jarvis-owl/node_post).

## SRC
[sidebar html](https://bootstrapious.com/p/bootstrap-sidebar)

---

- Tab Length = 4 Spaces
- concise issue titles
