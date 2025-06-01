<?xml version="1.0"?>
<flowgorithm fileversion="4.2">
    <attributes>
        <attribute name="name" value="Guessing"/>
        <attribute name="authors" value="giles"/>
        <attribute name="about" value=""/>
        <attribute name="saved" value="2025-05-29 09:48:33 AM"/>
        <attribute name="created" value="Z2lsZXM7U0FORFJBU1NDSE9PTDsyMDI1LTA1LTI5OzA5OjM1OjEzIEFNOzI3ODc="/>
        <attribute name="edited" value="Z2lsZXM7U0FORFJBU1NDSE9PTDsyMDI1LTA1LTI5OzA5OjQ4OjMzIEFNOzE7MjkwMQ=="/>
    </attributes>
    <function name="Main" type="None" variable="">
        <parameters/>
        <body>
            <declare name="RandomNumber" type="Integer" array="False" size=""/>
            <declare name="GuessNumber" type="Integer" array="False" size=""/>
            <assign variable="RandomNumber" expression="Random(11)"/>
            <output expression="&quot;Enter a number between 0 and 10&quot;" newline="True"/>
            <input variable="GuessNumber"/>
            <while expression="GuessNumber &lt;&gt; RandomNumber">
                <output expression="&quot;Enter a number between 0 and 10&quot;" newline="True"/>
                <input variable="GuessNumber"/>
            </while>
            <output expression="&quot;That is correct&quot;" newline="True"/>
        </body>
    </function>
</flowgorithm>
