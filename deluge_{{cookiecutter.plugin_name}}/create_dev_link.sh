#!/bin/bash
BASEDIR=$(cd `dirname $0` && pwd)
CONFIG_DIR=$( {{cookiecutter.plugin_name}} -z $1 && echo "{{cookiecutter.deluge_config_path}}" || echo "$1")
[ -d "$CONFIG_DIR/plugins" ] || echo "Config dir "$CONFIG_DIR" is either not a directory or is not a proper deluge config directory. Exiting"
[ -d "$CONFIG_DIR/plugins" ] || exit 1
cd $BASEDIR
test -d $BASEDIR/temp || mkdir $BASEDIR/temp
export PYTHONPATH=$BASEDIR/temp
/usr/bin/python setup.py build develop --install-dir $BASEDIR/temp
cp $BASEDIR/temp/*.egg-link $CONFIG_DIR/plugins
rm -fr $BASEDIR/temp
