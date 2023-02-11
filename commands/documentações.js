const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Acesse a documentação da tecnologia que quiser'),
        
        async execute(interaction){
            await interaction.reply('Pong!')
        }
}