// --- Configuration ---
        const normalLower = 'abcdefghijklmnopqrstuvwxyz';
        const normalUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const normalDigits = '0123456789';
        const normal = normalLower + normalUpper + normalDigits;

        // Dictionaries
        const REVERSE_MAP = new Map(); // Global

        // Helper to map characters and REGISTER them for reverse mapping
        const mapChars = (text, sourceSet, targetSet) => {
            const styledChars = Array.from(targetSet);
            let result = '';
            for (let char of text) {
                const index = sourceSet.indexOf(char);
                if (index !== -1 && styledChars[index]) {
                    result += styledChars[index];
                } else {
                    result += char;
                }
            }
            return result;
        };

        // --- Styles Definition ---
        const styles = [
            {
                id: 'script',
                name: 'Script',
                category: 'Cursive',
                vocab: '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'bold-script',
                name: 'Bold Script',
                category: 'Cursive',
                vocab: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'fraktur',
                name: 'Fraktur',
                category: 'Gothic',
                vocab: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔧𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'bold-fraktur',
                name: 'Bold Fraktur',
                category: 'Gothic',
                vocab: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'double-struck',
                name: 'Double Struck',
                category: 'Fancy',
                vocab: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'serif-bold',
                name: 'Serif Bold',
                category: 'Classic',
                vocab: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'serif-italic',
                name: 'Serif Italic',
                category: 'Classic',
                vocab: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
             {
                id: 'serif-bold-italic',
                name: 'Serif Bold Italic',
                category: 'Classic',
                vocab: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'sans-bold',
                name: 'Sans Bold',
                category: 'Modern',
                vocab: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'sans-italic',
                name: 'Sans Italic',
                category: 'Modern',
                vocab: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'sans-bold-italic',
                name: 'Sans Bold Italic',
                category: 'Modern',
                vocab: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'monospace',
                name: 'Monospace',
                category: 'Tech',
                vocab: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'upside-down',
                name: 'Upside Down',
                category: 'Fun',
                customMap: {
                    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ı', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
                    'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': '◖', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': '⋊', 'L': '⅂', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ò', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
                    '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
                    '.': '˙', ',': "'", '?': '¿', '!': '¡', '"': '„', "'": ',', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '_': '‾'
                },
                preview: 'uʍoᗡ ǝpısd∩',
                transform: function(text) {
                    return text.split('').map(c => this.customMap[c] || c).reverse().join('');
                }
            },
            {
                id: 'upside-down-2',
                name: 'Upside Down 2',
                category: 'Fun',
                customMap: (function() {
                    const lowerMap = 'ɐqɔpǝɟɓɥıɾʞlɯuodbɹsʇnʌʍxʎz';
                    const upperMap = '∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNOԀΌᴚS⊥∩ΛMX⅄Z';
                    const normalL = 'abcdefghijklmnopqrstuvwxyz';
                    const normalU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    const map = {};
                    for(let i=0; i<26; i++) {
                        map[normalL[i]] = lowerMap[i];
                        map[normalU[i]] = upperMap[i];
                    }
                    return map;
                })(),
                preview: 'Z⅄X...',
                transform: function(text) {
                    return text.split('').map(c => this.customMap[c] || c).reverse().join('');
                }
            },
            {
                id: 'cherokee',
                name: 'Cherokee',
                category: 'Aesthetic',
                vocab: 'ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ0123456789',
                preview: 'ᏗᏰፈ...',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'thai-style',
                name: 'Thai Style',
                category: 'Aesthetic',
                vocab: 'ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ0123456789',
                preview: 'ค๖¢...',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'superscript',
                name: 'Tiny (Super)',
                category: 'Size',
                customMap: {
                    'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᵠ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
                    'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'ᵠ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
                    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
                },
                preview: 'ᵀⁱⁿʸ ᵀᵉˣᵗ',
                transform: function(text) { 
                     return text.split('').map(c => this.customMap[c] || c).join('');
                }
            },
            {
                id: 'bubbles',
                name: 'Bubbles',
                category: 'Fun',
                vocab: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'bubbles-black',
                name: 'Dark Bubbles',
                category: 'Fun',
                preview: 'Dark Bubbles',
                transform: (text) => {
                    const digits = '⓿❶❷❸❹❺❻❼❽❾';
                    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    let result = "";
                    const upperText = text.toUpperCase();
                    for(let char of upperText) {
                        const idx = alphabet.indexOf(char);
                        if (idx > -1) {
                            result += String.fromCodePoint(0x1F150 + idx);
                        } else if (/\d/.test(char)) {
                            result += digits[parseInt(char)];
                        } else {
                            result += char;
                        }
                    }
                    return result;
                },
                onInit: () => {
                   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                   const digits = '⓿❶❷❸❹❺❻❼❽❾';
                   for(let i=0; i<26; i++) {
                       REVERSE_MAP.set(String.fromCodePoint(0x1F150 + i), alphabet[i]);
                   }
                   for(let i=0; i<10; i++) REVERSE_MAP.set(digits[i], String(i));
                }
            },
            {
                id: 'square',
                name: 'Square',
                category: 'Fun',
                preview: 'Square',
                transform: (text) => {
                    let result = "";
                    const upperText = text.toUpperCase();
                    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for(let char of upperText) {
                        const idx = alphabet.indexOf(char);
                        if(idx > -1) {
                            result += String.fromCodePoint(0x1F130 + idx);
                        } else {
                            result += char;
                        }
                    }
                    return result;
                },
                onInit: () => {
                   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                   for(let i=0; i<26; i++) {
                       REVERSE_MAP.set(String.fromCodePoint(0x1F130 + i), alphabet[i]);
                   }
                }
            },
            {
                id: 'square-dark',
                name: 'Square Dark',
                category: 'Fun',
                preview: 'Square Dark',
                transform: (text) => {
                     let result = "";
                    const upperText = text.toUpperCase();
                    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for(let char of upperText) {
                        const idx = alphabet.indexOf(char);
                        if(idx > -1) {
                            result += String.fromCodePoint(0x1F170 + idx);
                        } else {
                            result += char;
                        }
                    }
                    return result;
                },
                onInit: () => {
                   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                   for(let i=0; i<26; i++) {
                       REVERSE_MAP.set(String.fromCodePoint(0x1F170 + i), alphabet[i]);
                   }
                }
            },
             {
                id: 'parenthesized',
                name: 'Parenthesized',
                category: 'Fun',
                vocab: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵0123456789',
                transform: function(text) { return mapChars(text, normal, this.vocab); }
            },
            {
                id: 'cute',
                name: 'Cute / Pseudo',
                category: 'Aesthetic',
                customMap: {
                    'a': 'α', 'b': 'в', 'c': '¢', 'd': '∂', 'e': 'ε', 'f': 'ƒ', 'g': 'g', 'h': 'н', 'i': 'ι', 'j': 'נ', 'k': 'к', 'l': 'ℓ', 'm': 'м', 'n': 'η', 'o': 'σ', 'p': 'ρ', 'q': 'q', 'r': 'я', 's': 'ѕ', 't': 'т', 'u': 'υ', 'v': 'ν', 'w': 'ω', 'x': 'χ', 'y': 'у', 'z': 'z',
                    'A': 'Α', 'B': 'Β', 'C': 'C', 'D': 'D', 'E': 'Ε', 'F': 'F', 'G': 'G', 'H': 'Η', 'I': 'Ι', 'J': 'J', 'K': 'Κ', 'L': 'L', 'M': 'Μ', 'N': 'Ν', 'O': 'Ο', 'P': 'Ρ', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'Τ', 'U': 'υ', 'V': 'ν', 'W': 'ω', 'X': 'Χ', 'Y': 'Υ', 'Z': 'Ζ'
                },
                preview: 'тεxт',
                transform: function(text) {
                    return text.split('').map(c => this.customMap[c] || c).join('');
                }
            },
            {
                id: 'small-caps',
                name: 'Small Caps',
                category: 'Classic',
                customMap: {
                    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ',
                    'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ',
                    's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
                },
                preview: 'Small Caps',
                transform: function(text) {
                    // Small caps is tricky because it loses case information (everything becomes "upper").
                    // We map lowercase to small caps.
                    return text.toLowerCase().split('').map(c => this.customMap[c] || c).join('');
                }
            },
            {
                id: 'wide',
                name: 'Wide / Fullwidth',
                category: 'Aesthetic',
                preview: 'Wide Text',
                transform: (text) => {
                    return text.split('').map(char => {
                        const code = char.charCodeAt(0);
                        if (code >= 33 && code <= 126) {
                            return String.fromCharCode(code + 65248);
                        } else if (code === 32) {
                            return String.fromCharCode(12288);
                        }
                        return char;
                    }).join('');
                },
                onInit: () => {
                     // Wide char reverse map
                     for(let code = 33; code <= 126; code++) {
                         REVERSE_MAP.set(String.fromCharCode(code + 65248), String.fromCharCode(code));
                     }
                     REVERSE_MAP.set(String.fromCharCode(12288), ' ');
                }
            },
            {
                id: 'greek-symbol',
                name: 'Greek / Symbol',
                category: 'Aesthetic',
                customMap: {
                    'a': 'Λ', 'b': 'B', 'c': 'ᄃ', 'd': 'D', 'e': 'Σ', 'f': 'F', 'g': 'G', 'h': 'Ή', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'ᄂ', 'm': 'M', 'n': 'П', 'o': 'Ө', 'p': 'P', 'q': 'Q', 'r': 'Я', 's': 'Ƨ', 't': 'Ƭ', 'u': 'Ц', 'v': 'V', 'w': 'Щ', 'x': 'X', 'y': 'Y', 'z': 'Z',
                    'A': 'Λ', 'B': 'B', 'C': 'ᄃ', 'D': 'D', 'E': 'Σ', 'F': 'F', 'G': 'G', 'H': 'Ή', 'I': 'I', 'J': 'J', 'K': 'K', 'L': 'ᄂ', 'M': 'M', 'N': 'П', 'O': 'Ө', 'P': 'P', 'Q': 'Q', 'R': 'Я', 'S': 'Ƨ', 'T': 'Ƭ', 'U': 'Ц', 'V': 'V', 'W': 'Щ', 'X': 'X', 'Y': 'Y', 'Z': 'Z'
                },
                preview: 'ΛBᄃDΣ...',
                transform: function(text) {
                    return text.split('').map(c => this.customMap[c] || c).join('');
                }
            }
        ];

        // --- Init Function to Build Reverse Map ---
        function initReverseMap() {
            styles.forEach(style => {
                if (style.vocab) {
                    const styledChars = Array.from(style.vocab);
                    const sourceChars = Array.from(normal);
                    styledChars.forEach((char, index) => {
                        if (index < sourceChars.length && !REVERSE_MAP.has(char)) {
                            REVERSE_MAP.set(char, sourceChars[index]);
                        }
                    });
                }
                if (style.customMap) {
                    Object.entries(style.customMap).forEach(([normalChar, styledChar]) => {
                         if (!REVERSE_MAP.has(styledChar)) {
                             REVERSE_MAP.set(styledChar, normalChar);
                         }
                    });
                }
                if (style.onInit) {
                    style.onInit();
                }
            });
        }

        // --- Application Logic ---
        const inputText = document.getElementById('inputText');
        const stylesContainer = document.getElementById('stylesContainer');
        const charCount = document.getElementById('charCount');
        const toast = document.getElementById('toast');
        const inputTranslator = document.getElementById('inputTranslator');
        const outputTranslator = document.getElementById('outputTranslator');
        
        // Pseudo Tabs Elements
        const inputPseudoGen = document.getElementById('inputPseudoGen');
        const outputPseudoGen = document.getElementById('outputPseudoGen');
        const inputPseudoRev = document.getElementById('inputPseudoRev');
        const outputPseudoRev = document.getElementById('outputPseudoRev');

        initReverseMap();

        function renderStyles(text) {
            const content = text || "Type something...";
            stylesContainer.innerHTML = '';
            styles.forEach(style => {
                const transformed = style.transform(content);
                const card = document.createElement('div');
                card.className = "style-card bg-white rounded-xl border border-slate-200 p-4 flex flex-col gap-3 relative group cursor-pointer";
                card.onclick = () => copyToClipboard(transformed);
                
                const header = document.createElement('div');
                header.className = "flex justify-between items-center";
                
                const nameTag = document.createElement('span');
                nameTag.className = "text-xs font-semibold text-slate-400 uppercase tracking-wider";
                nameTag.textContent = style.name;
                
                const copyIcon = document.createElement('i');
                copyIcon.className = "fa-regular fa-copy text-slate-400 group-hover:text-indigo-600 transition-colors";
                
                header.appendChild(nameTag);
                header.appendChild(copyIcon);
                
                const resultText = document.createElement('div');
                resultText.className = "text-lg text-slate-800 break-words font-medium";
                resultText.style.lineHeight = "1.6"; 
                resultText.textContent = transformed;
                
                card.appendChild(header);
                card.appendChild(resultText);
                stylesContainer.appendChild(card);
            });
        }

        function translateToNormal(text) {
            const chars = Array.from(text);
            return chars.map(char => REVERSE_MAP.get(char) || char).join('');
        }
        
        // Pseudo Specific Logic (NOW UPDATED TO BASE64)
        function generatePseudo(text) {
            // Use Base64 for obfuscation (Secret Code)
            try {
                // Handle unicode strings by escaping
                return btoa(unescape(encodeURIComponent(text)));
            } catch (e) {
                return "Error encoding text";
            }
        }
        
        function reversePseudo(text) {
            // Decode Base64
            try {
                return decodeURIComponent(escape(atob(text)));
            } catch (e) {
                return "Invalid secret code";
            }
        }

        function updateCharCount(text) {
            charCount.textContent = `${text.length} characters`;
        }

        function clearText(id) {
            const el = document.getElementById(id);
            el.value = '';
            el.focus();
            if(id === 'inputText') {
                renderStyles('');
                updateCharCount('');
            } else if (id === 'inputTranslator') {
                outputTranslator.value = '';
            } else if (id === 'inputPseudoGen') {
                outputPseudoGen.value = '';
            } else if (id === 'inputPseudoRev') {
                outputPseudoRev.value = '';
            }
        }

        function copyToClipboard(text) {
            const fallbackCopy = (text) => {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    showToast();
                } catch (err) {
                    console.error('Fallback copy failed', err);
                }
                document.body.removeChild(textArea);
            };

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text)
                    .then(() => showToast())
                    .catch(err => {
                        console.warn('Clipboard API failed, using fallback', err);
                        fallbackCopy(text);
                    });
            } else {
                fallbackCopy(text);
            }
        }

        function showToast() {
            toast.classList.remove('hidden');
            toast.classList.add('flex');
            toast.classList.remove('copy-feedback');
            void toast.offsetWidth; 
            toast.classList.add('copy-feedback');
            setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('flex');
            }, 2000);
        }

        function switchTab(tab) {
            const panels = ['panel-generator', 'panel-translator', 'panel-pseudo-gen', 'panel-pseudo-rev'];
            const tabs = ['tab-generator', 'tab-translator', 'tab-pseudo-gen', 'tab-pseudo-rev'];
            
            panels.forEach(p => {
                const el = document.getElementById(p);
                if (p === `panel-${tab}`) el.classList.remove('hidden');
                else el.classList.add('hidden');
            });
            
            tabs.forEach(t => {
                const el = document.getElementById(t);
                if (t === `tab-${tab}`) {
                    el.classList.add('tab-active');
                    el.classList.remove('tab-inactive');
                } else {
                    el.classList.remove('tab-active');
                    el.classList.add('tab-inactive');
                }
            });
        }

        // Event Listeners
        inputText.addEventListener('input', (e) => {
            updateCharCount(e.target.value);
            renderStyles(e.target.value);
        });
        inputTranslator.addEventListener('input', (e) => {
            outputTranslator.value = translateToNormal(e.target.value);
        });
        
        // Listeners for New Tabs
        inputPseudoGen.addEventListener('input', (e) => {
            outputPseudoGen.value = generatePseudo(e.target.value);
        });
        inputPseudoRev.addEventListener('input', (e) => {
            outputPseudoRev.value = reversePseudo(e.target.value);
        });

        // Initial Render
        renderStyles('');