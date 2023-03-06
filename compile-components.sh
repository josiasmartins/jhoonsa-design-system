#!/bin/bash

# Remove a pasta "dist" antes de criar os componentes compilados
rm -rf dist/

# Loop pelos diretórios dos componentes em src/js/components
for dir in src/js/components/*/; do
  # Obtém o nome do componente a partir do caminho do diretório
  component=${dir%/}
  component=${component##*/}

  # Cria o diretório do componente em "dist" se ele não existir
  mkdir -p "dist/$component"

  # Compila o arquivo JavaScript do componente com Browserify, usando o plugin Babel e o plugin cssify
  # Também injeta o conteúdo do arquivo CSS do componente no arquivo JavaScript usando a opção "-x"
  # O arquivo compilado é salvo em "dist/nome-do-componente/nome-do-componente.js"
  browserify "src/js/components/$component/$component.js" -t [ babelify --presets [ @babel/preset-env ] ]  -t [ stringify --extensions [.html] ] -t cssify -x "./$component.css" > "dist/$component/$component.js"
done


# $dir%/* remove a menor correspondência possível do padrão /* no final da string armazenada na variável $dir, deixando apenas o caminho do diretório sem o nome do último componente. Por exemplo, se $dir contém o valor src/js/components/meu-componente/, a expansão $dir%/* retornará src/js/components.

# $component##*/ remove a maior correspondência possível do padrão */ no início da string armazenada na variável $component, deixando apenas o nome do componente sem o caminho do diretório. Por exemplo, se $component contém o valor src/js/components/meu-componente/, a expansão $component##*/ retornará meu-componente.
