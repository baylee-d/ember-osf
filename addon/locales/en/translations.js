export default {
    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
    preprintWords: {
        preprint: {
            preprint: 'preprint',
            preprints: 'preprints',
            Preprint: 'Preprint',
            Preprints: 'Preprints'
        },
        paper: {
            preprint: 'paper',
            preprints: 'papers',
            Preprint: 'Paper',
            Preprints: 'Papers'
        },
        thesis: {
            preprint: 'thesis',
            preprints: 'theses',
            Preprint: 'Thesis',
            Preprints: 'Theses'
        },
        none: {
            preprint: '',
            preprints: '',
            Preprint: '',
            Preprints: ''
        },
        default: {
            preprint: 'document',
            preprints: 'documents',
            Preprint: 'Document',
            Preprints: 'Documents'
        }
    },
    eosf: {
        signup: {
            headingTitle: 'Create a free account',
            labelInputName: 'Full name',
            labelInputEmail: 'Email',
            labelConfirmEmail: 'Confirm Email',
            placeholderConfirmEmail: 'Re-enter email',
            labelInputPassword: 'Password',
            textTosNotice: 'By clicking "Create account", you agree to our <a href="https://github.com/CenterForOpenScience/centerforopenscience.org/blob/master/TERMS_OF_USE.md">Terms</a> and that you have read our <a href="https://github.com/CenterForOpenScience/centerforopenscience.org/blob/master/PRIVACY_POLICY.md">Privacy Policy</a>, including our information on <a href="https://github.com/CenterForOpenScience/centerforopenscience.org/blob/master/PRIVACY_POLICY.md#f-cookies">Cookie Use</a>.',
            buttonSubmit: 'Create account'
        },
        navbar: {
            osf: 'OSF',
            openScienceFramework: 'Open Science Framework',
            add: 'Add',
            addAPreprint: 'Add a {{preprintWords.Preprint}}',
            browse: 'Browse',
            cancelSearch: 'Cancel search',
            dashboard: 'Dashboard',
            donate: 'Donate',
            goHome: 'Go home',
            meetings: 'Meetings',
            myProjects: 'My Projects',
            myQuickFiles: 'My Quick Files',
            newProjects: 'New Projects',
            preprints: 'Preprints',
            registries: 'Registries',
            reviews: 'My Reviewing',
            search: 'Search',
            searchHelp: 'Search help',
            altSearchOSF: 'Search OSF',
            searchTheOSF: 'Search the OSF',
            sendSearch: 'Send search query',
            support: 'Support',
            toggleNavigation: 'Toggle navigation',
            togglePrimary: 'Toggle primary navigation',
            toggleSecondary: 'Toggle secondary navigation',
        },
        authDropdown: {
            logOut: 'Log Out',
            myProfile: 'My Profile',
            support: 'Support',
            osfSupport: 'OSF Support',
            settings: 'Settings',
            signUp: 'Sign Up',
            signIn: 'Sign In',
            toggleAuthDropdown: 'Toggle auth dropdown',
            altUserGravatar: 'User gravatar'
        },
        searchHelpModal: {
            close: 'Close',
            searchHelp: 'Search help',
            queries: 'Queries',
            searchUsesThe: 'Search uses the ',
            searchSyntax: 'search syntax',
            helpDescription: 'This gives you many options, but can be very simple as well. Examples of valid searches include:'
        },
        projectNavbar: {
            toggleNavigation: 'Toggle navigation',
            navigation: 'Navigation',
            privateParentMessage: 'Parent project is private',
            files: 'Files',
            wiki: 'Wiki',
            analytics: 'Analytics',
            registrations: 'Registrations',
            forks: 'Forks',
            contributors: 'Contributors',
            settings: 'Settings',
            comments: 'Comments'
        },
        footer: {
            osf: 'OSF',
            explore: 'Explore',
            faqGuides: 'FAQ/Guides',
            api: 'API',
            sourceCode: 'Source Code',
            centerForOpenScience: 'Center for Open Science',
            home: 'Home',
            reproducibilityProjectPsychology: 'Reproducibility Project: Psychology',
            reproducibilityProjectBiology: 'Reproducibility Project: Cancer Biology',
            topGuidelines: 'TOP Guidelines',
            donate: 'Donate',
            socialize: 'Socialize'
        },
        osfModeFooter: {
            warning: 'WARNING',
            runningInDevelopmentMode: ': This site is running in development mode.'
        },
        components: {
            searchResult: {
                addedOn: 'Added on',
                lastEdited: 'Last edited',
                showResult: 'Expand search result',
                withdrawn: 'Withdrawn'

            },
            citationWidget: {
                apa: 'APA',
                mla: 'MLA',
                chicago: 'Chicago',
                getMoreCitations: 'Get more citations',
                loadingMessage: 'Searching...',
                noMatchesMessage: 'No matches found.',
                searchMessage: 'Please enter a few characters'
            },
            commenting: {
                commentDetail: {
                    commentDeleted: 'Comment deleted',
                    restore: 'Restore',
                    edit: 'Edit',
                    delete: 'Delete',
                    report: 'Report'
                },
                commentForm: {
                    addComment: 'Add comment'
                },
                commentPane: {
                    comments: 'Comments',
                    none: '(none)'
                }
            },
            discoverPage: {
                activeFilters: {
                    heading: 'Active Filters',
                    button: 'Clear filters'
                },
                search: 'Search',
                searchPlaceholder: 'Search...',
                share: 'SHARE',
                poweredBy: 'powered by',
                noResults: 'No results. Try removing some filters.',
                asOf: 'as of',
                sortBy: 'Sort by',
                partnerRepositories: 'Partner Repositories',
                refineSearch: 'Refine your search by',
                noResultsFound: 'No results found.',
                broadenSearch: 'Try broadening your search terms',
                shareUnavailable: 'Search is Unavailable',
                luceneHelp: 'Lucene search help',
                removeProvider: 'Remove provider',
                removeSubject: 'Remove subject',
                removeRegistrationType: 'Remove registration type',
                shareUnavailableDescription: 'SHARE Search is temporarily unavailable. We have been notified and are working to fix the problem. Please try again later.',
                searchLoading: 'Search loading',
                sortSearchResults: 'Sort search results',
                source: `Source`,
                date: `Date`,
                type: `Type`,
                tag: `Tag`,
                publisher: `Publisher`,
                funder: `Funder`,
                language: `Language`,
                people: `People`
            },
            fileBrowser: {
                upload: 'Upload',
                share: 'Share',
                loading: 'Loading...',
                download: 'Download',
                view: 'View',
                move: 'Move',
                delete: 'Delete',
                rename: 'Rename',
                deleteMultiple: 'Delete multiple',
                downloadZip: 'Download as zip',
                filter: 'Filter',
                name: 'Name',
                size: 'Size',
                version: 'Version',
                downloads: 'Downloads',
                modified: 'Modified',
                modals: {
                    irreversibleMessage: 'This action is irreversible.',
                    instructions: {
                        howToUse: 'How to use the file browser',
                        upload: 'Upload:',
                        uploadMessage: 'Single file uploads via drag and drop or by clicking the upload button.',
                        select: 'Select rows:',
                        selectMessage: 'Click on a row to show further actions in the toolbar. Use Command or Shift keys to select multiple files.',
                        folders: 'Folders:',
                        foldersMessage: 'Not supported; consider an OSF project for uploading and managing many files.',
                        openFile: 'Open files:',
                        openFileMessage: 'Click a file name to go to view the file in the OSF.',
                        openFileTab: 'Open files in new tab:',
                        openFileTabMessage: 'Press Command (Ctrl in Windows) and click a file name to open it in a new tab.',
                        downloadZip: 'Download as zip:',
                        downloadZipMessage: 'Click the Download as Zip button in the toolbar to download all files as a .zip.',
                        close: 'Close'
                    },
                    deleteItem: {
                        deleteMessageStart: 'Delete "',
                        deleteMessageEnd: '" ?',
                        buttons: {
                            cancel: 'Cancel',
                            delete: 'Delete'
                        }
                    },
                    deleteMultiple: {
                        deleteMessage: 'Delete multiple?',
                        buttons: {
                            cancel: 'Cancel',
                            delete: 'Delete'
                        }
                    },
                    renameConflict: {
                        conflictMessageStart: 'An item named ',
                        conflictMessageEnd: ' already exists in this location.',
                        keepBoth: '"Keep Both" will retain both files (and their version histories) in this location.',
                        replace: '"Replace" will overwrite the existing file in this location. You will lose previous versions of the overwritten file. You will keep previous versions of the moved file.',
                        buttons: {
                            cancel: 'Cancel',
                            keepBoth: 'Keep Both',
                            replace: 'Replace'
                        }
                    },
                    moveFile: {
                        moveFileMessage: 'Move file to project',
                        buttons: {
                            cancel: 'Cancel',
                            back: 'Back',
                            moveFile: 'Move file'
                        }
                    }
                },
                dropzoneWidget: {
                    uploadText: 'Drop file to upload',
                    placeholderText: 'Drop files here to upload',
                    userHasNotUploadedFiles: 'This user has not uploaded any quickfiles'
                }
            },
            fileChooser: {
                dragAndDropMessage: 'You can also drag and drop a file from your computer.',
                error: 'Error: ',
                chosenFiles: 'Chosen files'
            },
            fileEditor: {
                edit: 'Edit',
                revert: 'Revert',
                save: 'Save'
            },
            fileWidget: {
                loginToOSF: 'Login to OSF',
                chooseAnOSFProject: 'Choose an OSF project:',
                back: 'Back'
            },
            licensePicker: {
                chooseALicense: 'Choose a license:',
                required: '(required)',
                licenseFAQ: 'License FAQ',
                year: 'Year:',
                copyrightHolders: 'Copyright Holders:',
                save: 'Save',
            },
            maintenanceBanner: {
                times: 'x',
                notice: 'Notice:',
                willUndergoMaintenance: 'The site will undergo maintenance between',
                and: 'and',
                thankYou: 'Thank you for your patience.'
            },
            oauthPopup: {
                login: 'Login'
            },
            osfCopyright: {
                copyright: 'Copyright © 2011-',
                centerForOpenScience: 'Center for Open Science',
                termsOfUse: 'Terms of Use',
                privacyPolicy: 'Privacy Policy'
            },
            paginationControl: {
                previous: 'Previous',
                next: 'Next',
                page: 'Page',
                of: 'of'
            },
            querySyntax: {
                couldNotPerformQuery: "Could not perform search query.",
                moreInformationOnSearch: "Please see below for more information on advanced search queries.",
                reservedChars: "Reserved Characters",
                specialMeanings: "The following characters have special meanings in a query",
                escapeReservedChars: " If you want to use any of these reserved characters in your query, escape them with a leading backslash. For instance, to search for ",
                needToType: "you would need to type",
                searchByField: "Searching by Field",
                allFieldsSearched: "By default, all available fields are searched, but you can choose to search specific fields instead",
                titleContainsWord: "The title contains the word",
                descriptionContainsPhrase: "The description contains the exact phrase",
                listContainsExactPhrase: "The list of contributor names contains the exact phrase",
                listOfIdentifiersContains: "The list of identifiers contains",
                booleanOperators: "Boolean Operators",
                booleanDesc1: "By default, all terms in the query are optional, as long as one term matches. You can use boolean operators",
                booleanDesc2: "to have more control over the search",
                booleanDesc3: "The word",
                must: "must",
                mustNot: "must not",
                both: "both",
                theWord: "the word",
                booleanDesc4: "be present. The words",
                and: "and",
                or: "or",
                except: "except",
                excluding: "excluding",
                booleanDesc5: "are optional but used for sorting by relevance",
                booleanDesc6: "Same as above, except the word",
                booleanDesc7: "be present",
                booleanDesc8: "Equivalent to",
                booleanDesc9: "The word",
                booleanDesc10: "The list of tags contains",
                wildcards: "Wildcards",
                wildcardsDesc1: "Use wildcards to match multiple terms at once. Use",
                wildcardsDesc2: "to match any single character, or",
                wildcardsDesc3: "to match zero or more characters.",
                matchWordStartsWith: "Match any word that starts with",
                match: "Match",
                fuzziness: "Fuzziness",
                use: "Use",
                fuzzinessDesc1: "after a word to indicate a 'fuzzy' search, to include matches that are similar but not exactly the same.",
                thisUsesThe: "This uses the",
                damerauLevenshteinDistanceDesc: "to match all words with at most 1 change. You can specify a different maximum edit distance with a number after the",
                phraseProximity: "Phrase Proximity",
                phraseProximityDesc1: "You can also specify a maximum edit distance for phrases, to allow the words in the phrase to be farther apart or in a different order.",
                butNot: "but not",
                ranges: "Ranges",
                rangesDesc1: "Use brackets to specify ranges for a field. Square brackets",
                rangesDesc2: "indicate inclusive ranges and curly brackets",
                rangesDesc3: "indicate exclusive ranges",
                allDatesIn: "all dates in",
                allTagsBetween: "all tags between",
                boosting: "Boosting",
                boostingDesc1: "Use the boost operator",
                boostingDesc2: "with a number to make one term more relevant than another. The boost can be any positive number. Boosts between 0 and 1 reduce relevance.",
                boostingDesc3: "Boost results with",
                boostingDesc4: "higher than results with just",
                moreInformation: "More Information",
                moreInfoQuerySyntax: "For more details about query syntax, see the",
                documentation: "documentation"
            },
            searchFacetDaterange: {
                modifyDate: 'Modify daterange',
                allTime: 'All time'
            },
            searchFacetLanguage: {
                add: 'Add'
            },
            searchFacetSource: {
                'source': 'Source',
                'sources': 'Sources'
            },
            searchFacetWorktypeButton: {
                expandWorktype: 'Expand or contract worktype',
                removeWorktypeFilter: 'Remove worktype filter'
            },
            searchHelpModal: {
                close: 'Close',
                searchHelp: 'Search help',
                queries: 'Queries',
                searchUsesThe: 'Search uses the ',
                searchSyntax: 'search syntax',
                helpDescription: 'This gives you many options, but can be very simple as well. Examples of valid searches include:'
            },
            totalShareResults: {
                'searchablePreprints': `{{count}} searchable {{preprintWords.preprints}}`,
                'searchableRegistries': `{{count}} searchable registrations`,
                'searchableEvents': `{{count}} searchable events`,
            },
            moveToProject: {
                createNewProject: 'Create new project',
                connectToExisting: 'Connect file to existing OSF project',
                enterProjectTitle: 'Enter project title',
                enterComponentTitle: 'Enter component title',
                newProjectMessage: 'You have selected to create a new public project for your file. Users will still have access to your file unless the project becomes private.',
                chooseProject: 'Choose project',
                projectSelectMessage: 'The list of projects appearing in the selector are projects and components for which you have admin access. Registrations are not included here.',
                noProjectsExistError: 'You have no available projects. Go back to create a new project.',
                organizeProject: 'Organize',
                organizeParentNode: 'You can organize your file by storing it in the project or in its own component. If you select "Make a new component", the file will be stored in a new component inside the project. If you select "Use the current component", the file will be stored inside the project. If you are unsure, select "Make a new component".',
                organizeChildNode: 'You can organize your file by storing it in this component or in its own component. If you select "Make a new component", the file will be stored in a new component inside this component. If you select "Use the current component", the file will be stored inside this component. If you are unusure, select "Make a new component".',
                createComponent: 'Create component',
                couldNotCreateComponent: 'Could not create component. Please try again.',
                couldNotCreateProject: 'Could not create project. Please try again.',
                useCurrentComponent: 'Use current component',
                useCurrentProject: 'Use current project',
                convertOrCopyMessage: 'You have selected and organized your file. Clicking "Move file" will immediately make changes to your OSF project and move your file. You can continue viewing and editing your file from your project.',
                noLongerPublicWarning: 'Files moved to private projects/components will no longer be public or discoverable by others.',
                fileSuccessfullyMoved: 'File was moved successfully!',
                couldNotMoveFile: 'Could not move file. Please try again',
                keepWorkingHere: 'Keep working here',
                goToNewProject: 'Go to new project',
                goToNewComponent: 'Go to new component',
                goToComponent: 'Go to component',
                goToProject: 'Go to project',
            },
        }
    }
};
