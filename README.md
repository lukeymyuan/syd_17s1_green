# LevelUp Watch Edition App Development Environment Green Team

[Build Status](https://circleci.com/gh/twlevelup/syd_17s1_green)

This git repo contains all the code you need to prototype apps for the Proto Watch.

The [wiki](https://github.com/twlevelup/watch_edition/wiki) contains lots of useful documentation

# Installation

See the [Installation Instructions](https://github.com/twlevelup/watch_edition/wiki/Installation)

## Continuous Integration

This project is continuously deployed to heroku by [CircleCi](https://circleci.com).
You can view this app at [https://syd17s1green.herokuapp.com](https://syd17s1green.herokuapp.com)

### Before you commit

1. Check the CI build, do not commit unless it's passing!
2. Run ```git pull --rebase```
3. Fix any merge conflicts
4. Run
```./go pre-commit``` (OS X)
```npm -s run test``` (Windows)
```docker-compose -f docker-compose.test.yml up``` (Docker)
4. Fix any errors
5. Run ```git push```

### Checking the build status

To view the build status and get notifications about the build status:

1. Visit [Circle CI](https://circleci.com/gh/twlevelup/syd_17s1_green) and retrieve API token (Settings > API permissions > Create token)
2. Add the XML config to CCTray or CCMenu on your dev machine [Follow these instructions to get the proper URL](https://circleci.com/docs/1.0/polling-project-status/)
